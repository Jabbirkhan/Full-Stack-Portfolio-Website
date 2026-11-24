import { uploadOnCloudinary, uploadPdfToCloundinary } from "../utils/cloudinary.js";
import { Project } from "../models/projectModel.js";
import { v2 as cloudinary } from "cloudinary";
import { Admin } from "../models/adminModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import transporter from "../config/nodeMailer.js";

const accessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

const addProject = async (req, res) => {
  try {
    // Get data from body
    const { title, description, category, technologies, githubUrl, projectUrl, latest, comingSoon } = req.body;
    // Check the empty field
    if (!title || !description || !category || !technologies || !githubUrl || !projectUrl) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    let technologiesArray = [];
    if (technologies) {
      technologiesArray = JSON.parse(technologies);
    } else {
      technologiesArray = technologies.split(",").map(tech => tech.trim());
    }

    const image1 = req.files?.image1 && req.files?.image1?.[0]
    const image2 = req.files?.image2 && req.files?.image2?.[0]
    const image3 = req.files?.image3 && req.files?.image3?.[0]
    const image4 = req.files?.image4 && req.files?.image4?.[0]

    const images = [image1, image2, image3, image4].filter(image => image !== undefined);
    if (images.length === 0) {
      return res.status(400).json({ success: false, message: "At least one image is required!" });
    }

    let imagesPaths = images.map(image => image.path);
    // Upload images on cloudinary
    const uploadedImages = await Promise.all(imagesPaths.map(path => uploadOnCloudinary(path)));
    if (!uploadedImages) {
      return res.status(400).json({ success: false, message: "Images are not uploaded!" });
    }

    // Create project object
    const project = await Project.create({
      images: uploadedImages.map(image => image.secure_url),
      title,
      description,
      category,
      technologies: technologiesArray,
      githubUrl,
      projectUrl,
      latest: latest === "true" ? "true" : "false",
      comingSoon: comingSoon === "true" ? "true" : "false",
    });
    if (!project) {
      return res.status(500).json({ success: false, message: "Error while creating project" });
    }
    // Send the response
    return res.status(201).json({ success: true, message: "Project created successfully", project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

const allProjects = async (req, res) => {
  try {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 1;
    let category = req.query.category || "";
    let search = req.query.search || "";

    if (page < 1) page = 1;
    if (limit < 1) limit = 1;

    const skip = (page - 1) * limit;

    const filter = {};
    if (category) filter.category = category;
    if (search) filter.title = { $regex: search, $options: "i" };

    // Get all projects
    const projects = await Project.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);
    const newProjects = await Project.find().sort({ createdAt: -1 }).limit(10);
    const categories = await Project.distinct("category");

    const totalProjects = await Project.countDocuments(filter);
    const totalPages = Math.ceil(totalProjects / limit);

    // Send the response
    return res.status(200).json({
      success: true,
      projects, categories, totalProjects, newProjects, totalPages, currentPage: page
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description, category, technologies, githubUrl, projectUrl, latest, comingSoon } = req.body;
    if (!title || !description || !category || !technologies || !githubUrl || !projectUrl) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    let technologiesArray = [];
    if (technologies) {
      technologiesArray = JSON.parse(technologies);
    } else {
      technologiesArray = technologies.split(",").map(tech => tech.trim());
    }

    const image1 = req.files?.image1 && req.files?.image1?.[0]
    const image2 = req.files?.image2 && req.files?.image2?.[0]
    const image3 = req.files?.image3 && req.files?.image3?.[0]
    const image4 = req.files?.image4 && req.files?.image4?.[0]

    const images = [image1, image2, image3, image4].filter(Boolean);

    // If we did not have new images then we have to saved the old images
    const finalImages = project.images;

    // Delete old images from Cloudinary
    if (images.length > 0) {
      await Promise.all(
        project.images.map(image => {
          const imagePath = image.split("/").pop().split(".")[0];
          return cloudinary.uploader.destroy(imagePath);
        })
      );
      const imagesPaths = images.map(image => image.path);
      const uploadedImages = await Promise.all(imagesPaths.map(path => uploadOnCloudinary(path)));
      finalImages = uploadedImages.map(image => image.secure_url);
    }

    project.images = finalImages;
    if (title) project.title = title;
    if (description) project.description = description;
    if (category) project.category = category;
    if (technologies) project.technologies = technologiesArray;
    if (githubUrl) project.githubUrl = githubUrl;
    if (projectUrl) project.projectUrl = projectUrl;
    if (latest) project.latest = latest === "true" ? "true" : "false";
    if (comingSoon) project.comingSoon = comingSoon === "true" ? "true" : "false";

    const updatedProject = await project.save();
    return res.status(200).json({ success: true, message: "Project updated successfully", project: updatedProject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params; // params return object but we need id only, so destructure it

    const project = await Project.findById(id); // this method wants a raw id so we can't use {} brackets,
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    // Delete images from Cloudinary
    const imagesDeleted = await Promise.all(
      project.images.map(image => {
        const imagePath = image.split("/").pop().split(".")[0];
        return cloudinary.uploader.destroy(imagePath);

        // const parts = image.split("/");
        // const fileName = parts.pop();
        // const publicId = fileName.split(".")[0];
        // return cloudinary.uploader.destroy(publicId);
      })
    );

    if (!imagesDeleted) {
      return res.status(400).json({ success: false, message: "Images are not deleted" });
    }

    // Delete project from DB
    await Project.findByIdAndDelete(id);

    return res.status(200).json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const adminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

     // Here we match the received email with ADMN_EMAIL
    if(email !== process.env.ADMIN_EMAIL){
      return res.status(400).json({ success: false, message: "Email not matched with Admin Email!" });
    }

    const existAdmin = await Admin.findOne({ email });
    
    // Here we check if length of educator is more than one
    const admins = await Admin.find();
    if (existAdmin && admins.length > 0) {
      return res.status(400).json({ success: false, message: "Admin already registered, please login!" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      jobPosition: "",
      heading: "",
      aboutMe: "",
      experience: [],
      skills: []
    });
    if (!admin) {
      return res.status(500).json({ success: false, message: "Error while creating admin" });
    }
    return res.status(201).json({ success: true, message: "Admin created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    const admin = await Admin.findOne({ email }); // findOne method wants an object as parameter, so we use {} brackets

    if (!admin) {
      return res.status(400).json({ success: false, message: "Admin does not exist" });
    }

    const checkPassword = await bcrypt.compare(password, admin.password);
    if (!checkPassword) {
      return res.status(400).json({ success: false, message: "Incorrect password" });
    }

    const portfolioAdminToken = accessToken(admin._id);

    const options = {
      httpOnly: true,
      // secure: true, // Uncomment this line when deploying to production with HTTPS
      secure: false,
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    };

    res.status(200)
      .cookie("portfolioAdminToken", portfolioAdminToken, options)
      .json({ success: true, message: "Admin logged in successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAdminProfile = async (req, res) => {
  try {
    const id = req.admin._id;
    const { name, email, jobPosition, heading, aboutMe, experience, skills } = req.body;

    const admin = await Admin.findById(id).select("-password");
    if (!admin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    let allSkills;
    if (skills) {
      if (Array.isArray(skills)) {
        allSkills = skills
      } else {
        try {
          allSkills = JSON.parse(skills);
        } catch (error) {
          allSkills = skills.split(',').map((s) => s.trim());
        }
      }
    }

    let allExperience;
    if (experience) {
      if (Array.isArray(experience)) {
        allExperience = experience
      } else {
        try {
          allExperience = JSON.parse(experience);
        } catch (error) {
          allExperience = experience.split(',').map((ex) => ex.trim());
        }
      }
    }

    const resumePath = req.file?.path;
    
    const oldResumePublicId = admin.resumePublicId;

    let finalResume = admin.resume;
    let resumePublicId = null;

    if (resumePath) {
      const uploadedResume = await uploadPdfToCloundinary(resumePath);
      finalResume = uploadedResume ? uploadedResume.secure_url : admin.resume;
      resumePublicId = uploadedResume ? uploadedResume.public_id : null;
    }

    if (name) admin.name = name;
    if (email) admin.email = email;
    if (jobPosition) admin.jobPosition = jobPosition;
    if (aboutMe) admin.aboutMe = aboutMe;
    if (heading) admin.heading = heading;
    if (experience) admin.experience = allExperience;
    if (skills) admin.skills = allSkills;
    if (finalResume) {
      admin.resume = finalResume;
      admin.resumePublicId = resumePublicId;
    }

    await admin.save();

    if (finalResume && resumePublicId) {
        await cloudinary.uploader.destroy(oldResumePublicId, { resource_type: 'raw' });
      }

    return res.status(200).json({ success: true, message: "Profile updated successfully", profile: admin });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const adminProfile = async (req, res) => {
  try {
    // const id = req.admin._id; // Get admin ID from req.admin set by adminAuth middleware
    // const profile = await Admin.findById(id).select("-password");
    const profile = await Admin.find().select("-password");

    if (!profile) {
      return res.status(404).json({ success: false, message: "Admin profile not found" });
    }

    return res.status(200).json({ success: true, profile: profile[0] });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const adminVerify = async (req, res) => {
  try {
    return res.status(200).json({ success: true, message: "Admin verified successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const adminLogout = async (req, res) => {
  try {
    res.clearCookie("portfolioAdminToken", {
      httpOnly: true,
      // secure: true, // Uncomment this line when deploying to production with HTTPS
      secure: false,
      sameSite: "strict",
    });
    return res.status(200).json({ success: true, message: "Admin logged out successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Send OTP to reset password
const sendResetPasswordOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ success: false, message: "admin not found!" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP

    admin.verifyResetOtp = otp;
    admin.resetOtpExpiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    await admin.save();

    const emailOption = {
      from: process.env.SENDER_EMAIL,
      to: admin.email,
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
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ success: false, message: "admin not found" });
    }
    if (!admin.resetOtpExpiresAt || Date.now() > admin.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if (admin.verifyResetOtp === '' || admin.verifyResetOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    return res.status(200).json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// admin can reset password
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!newPassword || !email || !otp) {
      return res.status(400).json({ success: false, message: "Email, Otp and password are required!" });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ success: false, message: "admin not found" });
    }

    if (!admin.resetOtpExpiresAt || Date.now() > admin.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if (admin.verifyResetOtp === '' || admin.verifyResetOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    admin.password = hashedPassword;

    admin.verifyResetOtp = "";
    admin.resetOtpExpiresAt = null;

    await admin.save();

    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export {
  addProject,
  allProjects,
  updateProject,
  deleteProject,
  adminRegister,
  adminLogin,
  updateAdminProfile,
  adminProfile,
  adminLogout,
  adminVerify,
  sendResetPasswordOtp, verifyResetPasswordOtp, resetPassword,
};