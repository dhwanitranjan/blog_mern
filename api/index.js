import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.route.js";
const app = express();

// dotenv is used to read variables in env files.
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err, "error"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/user", userRouter);
