import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const identifier = req.headers["x-forwarded-for"] || req.ip; // behind a proxy
        const { success } = await ratelimit.limit(identifier);
        if (!success) {
            return res.status(429).json({success:false, message: "Too many requests"});
        }
        next();
    } catch (error) {
        return res.status(500).json({success:false, message: error.message});
    }
}

export default rateLimiter;