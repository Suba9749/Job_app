import express from "express";
import  dotenv from "dotenv";
import connectDB from "./db/connectMongodb.js";
import path from "path";

import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();


const app=express();

const PORT=process.env.PORT || 5000;


app.use(express.json()); // allow us to json data

const __dirname = path.resolve(); // get the current directory

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend", "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
  }
app.use("/api/jobs",jobRoutes); //prefix 




app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`);
});

