import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config();

connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// const app = express();

// // Immediately Invoked Function Expressions (IIFE)
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// })();
