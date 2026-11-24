import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    images: {
        type: Array,
        required: true, // Array of cloudinary URLs
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true, // Array of technology names
    },
    githubUrl: {
        type: String,
        required: true,
    },
    projectUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true, // e.g., "Web Development", "Mobile App", etc.
    },
    latest: {
        type: Boolean,
        default: false, // Indicates if this is a featured project
    },
    comingSoon: {
        type: Boolean,
        default: false, // Indicates if the project is under development
    }
},{timestamps: true});

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);