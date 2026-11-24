import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        default: null
    },
    provider: {
        type: String,
        default: null
    }, 
    providerId: {
        type: String,
        default: null
    }, 
    avatar : {
        type: String,
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    verifyOtp: {
        type: String,
        default: ''
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


export const User = mongoose.models.User || mongoose.model("User", userSchema);