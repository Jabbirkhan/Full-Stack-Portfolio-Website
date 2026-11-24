import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (path) => {
  try {
    if (!path) {
      return null
    }
    const response = await cloudinary.uploader.upload(path, { resource_type: "auto" });
    fs.unlinkSync(path); // Remove the file after upload 
    return response;
  } catch (error) {
    fs.unlinkSync(path); // Ensure the file is removed even if upload fails
    console.error("Error connected to cloudinary", error);
  }
};

export const uploadPdfToCloundinary = async (path) => {
    try {
        if(!path){
            return null;
        }
        const response = await cloudinary.uploader.upload(path, 
            { 
                resource_type: 'raw',
                folder: 'portfolioResume',
            }
        );
        fs.unlinkSync(path);
        return response;
    } catch (error) {
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        return null; // important
    }
}

export { uploadOnCloudinary };
