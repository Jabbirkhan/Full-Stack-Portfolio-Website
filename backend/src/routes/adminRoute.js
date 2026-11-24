import { Router } from "express";
import {
    addProject, allProjects, updateProject, deleteProject, adminLogin, adminProfile,
    updateAdminProfile, adminRegister, adminVerify, adminLogout, sendResetPasswordOtp,
    verifyResetPasswordOtp, resetPassword
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js"
import adminAuth from "../middlewares/adminAuth.js";

const adminRouter = Router();

adminRouter.route("/addproject").post(adminAuth, upload.fields([
    {name: "image1", maxCount: 1},
    {name: "image2", maxCount: 1},
    {name: "image3", maxCount: 1},
    {name: "image4", maxCount: 1},
]), addProject);

adminRouter.route("/updateproject/:id").patch(adminAuth, upload.fields([
    {name: "image1", maxCount: 1},
    {name: "image2", maxCount: 1},
    {name: "image3", maxCount: 1},
    {name: "image4", maxCount: 1},
]), updateProject);
adminRouter.route("/deleteproject/:id").delete(adminAuth, deleteProject);

adminRouter.route("/register").post(adminRegister);
adminRouter.route("/login").post(adminLogin);
adminRouter.route("/verify").get(adminAuth, adminVerify);
adminRouter.route("/logout").post(adminAuth, adminLogout);

adminRouter.route("/allprojects").get(adminAuth, allProjects);

adminRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
adminRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
adminRouter.route('/reset-password').post(resetPassword);

adminRouter.route("/updateprofile").patch(adminAuth, upload.single("resume"), updateAdminProfile);
adminRouter.route("/profile").get(adminAuth, adminProfile);

export default adminRouter;