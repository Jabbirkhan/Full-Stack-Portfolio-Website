import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    jobPosition: {
        type: String,
    },
    heading: {
        type: String,
    },
    aboutMe: {
        type: String,
    },
    experience: {
        type: Array,
    },
    skills: {
        type: Array,
    },
     resume : {
        type: String,
        default: null
    },
    resumePublicId: {
        type: String,
        default: null
    },
    verifyOtpExpiresAt: {
        type: Date,
        default: null
    },
    verifyResetOtp: {
        type: String,
        default: ''
    },
    resetOtpExpiresAt: {
        type: Date,
        default: null
    }
},{timestamps: true});

export const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);