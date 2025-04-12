import mongoose from "mongoose"; // importing mongoose
import Job from "../model/job.js"; // importing the job model


export const getAllJobs =async(req,res)=>{
    try {
      const job=await Job.find().sort({date:-1}); // getting all the jobs from the database
      res.status(200).json({success:true,data:job}); // sending the response back to the client
    } catch (error) {
      console.log(`error in fetching jobs ${error}`);
      res.status(500).json({success:false,message:"server error"}); // sending the error message back to the client
    }
  };


  export const createJob= async (req, res) => {
    const job=req.body; // getting the data from the body of the request
    console.log(job);
    if( !job.company || !job.role || !job.status){
        return res.status(400).json({message:"please provide all the fields"});
    }
    const newJob=new Job(job); // creating a new job object
    try {
     await newJob.save(); // saving the job object to the database
     res.status(201).json({success:true,data:newJob}); // sending the response back to the client
    } catch (error) {
     console.log(error);
     res.status(500).json({success:false,message:"server error"}); // sending the error message back to the client
     
    }
 };

 export const updateJob=async(req,res)=>{
    const {id}=req.params; 
  
    const job=req.body; 
  
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success:false,message:"invalid job id"});
    }
  
    try {
      const updateJob=await Job.findByIdAndUpdate(id,job,{new:true}); // updating the job object in the database
      if(!updateJob){
        return res.status(404).json({success:false,message:"job not found"}); // sending the error message back to the client
      }
      res.status(200).json({success:true,data:updateJob}); // sending the response back to the client
  
    } catch (error) {
      console.log(`error in updating job ${error}`);
      res.status(500).json({success:false,message:"server error in update job"}); 
    }
  };



  export const deleteJob=async(req,res)=>{
    const {id}=req.params; 
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success:false,message:"invalid job id"});
    }
    res.status(200).json({success:true,message:`job with id ${id} deleted`}); // sending the response back to the client
    try {
      await Job.findByIdAndDelete(id); // deleting the job object from the database
    } catch (error) {
      console.log(`error in deleting job ${error}`);
      res.status(500).json({success:false,message:"server error"}); // sending the error message back to the client
      
    }
  };