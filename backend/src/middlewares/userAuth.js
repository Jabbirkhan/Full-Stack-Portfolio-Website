
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const userAuth = async (req, res, next) => {
    try {
        let token;
        // 1. Check cookie
        if (req.cookies?.portfolioUserToken) {
            token = req.cookies.portfolioUserToken;
        }
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }
        // Verify the token (assuming a verifyToken function exists)
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken.id).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        req.user = user; // Attach user to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

export default userAuth;