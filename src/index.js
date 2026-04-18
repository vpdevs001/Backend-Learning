// import mongoose from "mongoose";
// import express from "express";

import app from "./app.js";
import "dotenv/config";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}`);

//     app.on("error", (error) => {
//       console.error("Error", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// })();
