import {create} from "zustand";

export const useJob = create((set) => ({
    jobs: [],
   setJobs: (jobs) => set({ jobs }),
   createJob: async (newJob)=>{
    if(!newJob.company || !newJob.role||!newJob.status){
        alert("Please fill all the fields");
        return;
    }
    const res=await fetch("/api/jobs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(newJob),
    });
    const data=await res.json();
    set((state)=>{
        return {jobs:[...state.jobs,data.data]}
    });
    return {success:true,message:"Job created successfully"};
   },

   fetchJobs: async () => {
    const res = await fetch("/api/jobs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    set({ jobs: data.data });
   },
   deleteJob: async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    set((state) => { // update the UI immediately
        return { jobs: state.jobs.filter((job) => job._id !== id) };
    });
    return { success: true, message: "Job deleted successfully" };
   },
   updateJob: async (id, updatedJob) => {
    const res = await fetch(`/api/jobs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJob),
    });
    const data = await res.json();
    set((state) => {
        return {
           jobs: state.jobs.map((job) =>
                job._id === id ? { ...job, ...updatedJob } : job
            ),
        };
    });
    return { success: true, message: "Job updated successfully" };
   },
}));


