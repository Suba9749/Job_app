import express from "express";
import { createJob, deleteJob, getAllJobs, updateJob } from "../controllers/jobController.js";

const router= express.Router();

  router.get("/",getAllJobs);
  
  router.post("/",createJob);
  
  router.put("/:id",updateJob);
  
  router.delete("/:id",deleteJob);
  
  

export default router;