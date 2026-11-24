import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";
import './src/config/passport.js';

// Importing user routes
import userRouter from "./src/routes/userRoute.js";
import adminRouter from "./src/routes/adminRoute.js";
import passport from "passport";
import rateLimiter from "./src/middlewares/rateLimiter.js";

// App configuration 
const app = express();
const port = process.env.PORT || 8001;

connectDB();

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // React app URL
    credentials: true, // Allow cookies to be sent
}));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public/temp"));
app.use(cookieParser());
app.use(passport.initialize());
// app.use(rateLimiter);

// API end points
app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin", adminRouter);

app.get("/", (req,res) => {
    res.send("API is working");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})