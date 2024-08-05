import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    //CORS(Cross-Origin Resource Sharing) is crucial for security and functioning of web applications making cross-origin requests.
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //accept json from the frontend (ex-accept form details)
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //get frontend data from url
app.use(express.static("public")); // store file,img  in public folder
app.use(cookieParser());
export { app };
