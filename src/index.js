import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Load environment variables from .env file
dotenv.config();

connectDB()
  .then(
    // app.on("error", (error) => {
    //   console.log("ERR:", error);
    // }),
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port ${process.env.PORT || 3000}`);
    })
  )
  .catch((error) => console.log("MongoDB connection failed: ", error));
