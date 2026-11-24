import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import transporter from "../config/nodeMailer.js";

const accessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const registerUser = async (req, res) => {
  try {
    // Get user data from body
    const { name, email, password } = req.body;
    // Check for empty field (validation)
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }
    // Validate the email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Enter a valid email!" });
    }
    // Check user already exist or not
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ success: false, message: "User already exist" });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user object
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      provider: null,
      providerId: null,
      avatar: null,
    });

    // Remove password from new created user
    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      return res.status(500).json({ success: false, message: "Error while creating a user" });
    }
    // Send the response with access token
    return res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    // Get user data from body
    const { email, password } = req.body;

    // Check for empty field (validation)
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required!" });
    }

    // Check user exist or not
    const user = await User.findOne({ email }); // expect a filter object, so we use {} brackets
    if (!user) {
      return res.status(400).json({ success: false, message: "User does not exist" });
    }
    if (user.password === null) {
      return res.status(400).json({ success: false, message: "User registered with Google. Please login with Google" });
    }
    // Check user password
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ success: false, message: "Password is incorrect" });
    }

    // generate access token
    const portfolioUserToken = accessToken(user._id);

    const options = {
      httpOnly: true,
      // secure: true, // for production
      secure: false,
      sameSite: "lax",
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    };
    // Send the response
    return res.status(201)
      .cookie("portfolioUserToken", portfolioUserToken, options)
      .json({ success: true, message: "User loged in successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const handleGoogleCallback = async (req, res) => {
  const profile = req.user; // profile is set by passport after successful authentication
  try {
    if (!profile) {
      return res.redirect('http://localhost:5173/login');
    }
    const providerId = profile.id;
    const name = profile.displayName;
    const email = profile.emails[0].value;
    const avatar = profile.photos[0].value;

    let user;

    user = await User.findOne({ provider: "google", providerId });

    if (!user && email) {
      user = await User.findOne({ email });
      if (user) {
        // If user exists with the same email but different provider, update the user document
        user.provider = "google";
        user.providerId = providerId;
        user.avatar = avatar;
        await user.save();
      }
    } else {
      // If user does not exist, create a new user
      user = await User.create({
        name,
        email,
        password: null, // No password for Google-authenticated users
        provider: "google",
        providerId,
        avatar,
      });
    }

    await user.save();

    // generate access token
    const portfolioUserToken = accessToken(user._id);
    const options = {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    }
    res.cookie("portfolioUserToken", portfolioUserToken, options);
    return res.redirect("http://localhost:5173/");
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const handleGithubCallback = async (req, res) => {
  const profile = req.user; // profile is set by passport after successful authentication
  try {
    if (!profile) {
      return res.redirect('http://localhost:5173/login');
    }
    const providerId = profile.id;
    const name = profile.username;
    const email = profile._json?.email || null;
    const avatar = profile.photos?.[0]?.value || profile._json?.avatar_url;

    let user;

    user = await User.findOne({ provider: "github", providerId });

    if (!user && email) {
      user = await User.findOne({ email });
      if (user) {
        // If user exists with the same email but different provider, update the user document
        user.provider = "github";
        user.providerId = providerId;
        user.avatar = avatar;
        await user.save();
      }
    } else {
      // If user does not exist, create a new user
      user = await User.create({
        name,
        email,
        password: null, // No password for Github-authenticated users
        provider: "github",
        providerId,
        avatar,
      });
    }

    await user.save();

    // generate access token
    const portfolioUserToken = accessToken(user._id);
    const options = {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    }
    res.cookie("portfolioUserToken", portfolioUserToken, options);
    return res.redirect("http://localhost:5173/");
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const userVerify = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const userProfile = async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).select("isAccountVerified");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const userLogout = async (req, res) => {
  try {
    res.clearCookie("portfolioUserToken", {
      httpOnly: true,
      // secure: true, // for production
      secure: false,
      sameSite: "lax",
    });
    return res.status(200).json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const sendContactMessage = async (req, res) => {
  try {
    const {name, subject, message} = req.body;
    if (!name || !subject || !message) {
      return res.status(400).json({ success: false, message: "Fields are empty!" });
    }

    const id = req.user._id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found!" });
    }

    if (user.isAccountVerified === false) {
      return res.status(400).json({ success: false, message: "Account is not verified" });
    }

    const emailOption = {
      from: user.email,
      to: process.env.ADMIN_EMAIL,
      subject: subject,
      text: `From ${name}, ${message}`,
    };

    await transporter.sendMail(emailOption);

    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Send OTP to verify email
const sendVerifyEmailOtp = async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found!" });
    }

    if (user.isAccountVerified) {
      return res.status(400).json({ success: false, message: "Account is already verified" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP

    user.verifyOtp = otp;
    user.verifyOtpExpiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes 
    await user.save();

    const emailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Verification email from LMS",
      text: `Your OTP for email verification is ${otp}`,
    };

    await transporter.sendMail(emailOption);

    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Verify OTP to verify email
const verifyEmailOtp = async (req, res) => {
  try {
    const id = req.user._id;
    const { otp } = req.body;
    if (!otp) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found!" });
    }
    if (Date.now() > user.verifyOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if (user.verifyOtp === '' || user.verifyOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    user.isAccountVerified = true;
    user.verifyOtp = '';
    user.verifyOtpExpiresAt = null;

    await user.save();
    return res.status(200).json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Send OTP to reset password
const sendResetPasswordOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found!" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP

    user.verifyResetOtp = otp;
    user.resetOtpExpiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    await user.save();

    const emailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Reset password OTP from LMS",
      text: `Your OTP for reset password is this ${otp}`,
    };

    await transporter.sendMail(emailOption);

    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Verify OTP to reset password
const verifyResetPasswordOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found" });
    }
    if (!user.resetOtpExpiresAt || Date.now() > user.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if (user.verifyResetOtp === '' || user.verifyResetOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    return res.status(200).json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// user can reset password
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!newPassword || !email || !otp) {
      return res.status(400).json({ success: false, message: "Email, Otp and password are required!" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found" });
    }

    if (!user.resetOtpExpiresAt || Date.now() > user.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if (user.verifyResetOtp === '' || user.verifyResetOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;

    user.verifyResetOtp = "";
    user.resetOtpExpiresAt = null;

    await user.save();

    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export {
  registerUser, loginUser, handleGoogleCallback, handleGithubCallback, userVerify, userLogout,
  userProfile, sendContactMessage,
  sendVerifyEmailOtp, verifyEmailOtp, sendResetPasswordOtp, verifyResetPasswordOtp, resetPassword,
};
