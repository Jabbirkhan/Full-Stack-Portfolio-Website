import jwt from "jsonwebtoken";
import { Admin } from "../models/adminModel.js";

const adminAuth = async (req, res, next) => {
  try {
    let token;

    // 1. Check cookie
    if (req.cookies?.portfolioAdminToken) {
      token = req.cookies.portfolioAdminToken;
    }

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decodedToken.id);
    if (!admin) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }

    // Attach decoded info if needed
    req.admin = admin;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;

