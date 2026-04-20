import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "node:fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on cloudinary

    const repsonse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has beeen uploaded successfully!

    console.log("File is uploaded on cloudinary ", repsonse.url);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
