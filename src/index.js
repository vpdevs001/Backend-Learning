// import mongoose from "mongoose";
// import "dotenv/config";
// import express from "express";

import connectDB from "./db/index.js";

connectDB();
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
