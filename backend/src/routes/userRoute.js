import { Router } from "express";
import {
    handleGoogleCallback, handleGithubCallback, loginUser, registerUser, userLogout, userVerify,
    userProfile, sendVerifyEmailOtp, verifyEmailOtp, sendResetPasswordOtp, verifyResetPasswordOtp,
    resetPassword, sendContactMessage
} from "../controllers/userController.js";
import { adminProfile, allProjects } from "../controllers/adminController.js";
import userAuth from "../middlewares/userAuth.js";
import passport from "passport";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/verify").get(userAuth, userVerify);
userRouter.route("/logout").post(userAuth, userLogout);
userRouter.route("/profile").get(userAuth, userProfile);
userRouter.route("/admin-profile").get(userAuth, adminProfile);
userRouter.route("/user-profile").get(userAuth, userProfile);

userRouter.route('/send-verify-email-otp').get(userAuth, sendVerifyEmailOtp);
userRouter.route('/verify-email-otp').post(userAuth, verifyEmailOtp);
userRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
userRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
userRouter.route('/reset-password').post(resetPassword);

userRouter.route("/send-contact-message").post(userAuth, sendContactMessage);

userRouter.route("/allprojects").get(userAuth, allProjects);

userRouter.route("/send-contact-message").post(userAuth, sendContactMessage);

userRouter.route("/google").get(passport.authenticate("google", { scope: ["profile", "email"]}));
userRouter.route("/google/callback").get(passport.authenticate("google", { session: false}), handleGoogleCallback);

userRouter.route("/github").get(passport.authenticate("github", { scope: ["user:email"]}));
userRouter.route("/github/callback").get(passport.authenticate("github", { session: false}), handleGithubCallback);

export default userRouter;

