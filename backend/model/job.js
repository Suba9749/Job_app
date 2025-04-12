import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    company: {
        type: String,
         required: true
    },
    role: {
        type: String,
         required: true
        },
    status: {
        type: String, 
        required: true, enum: ['applied', 'interview', 'offer', 'rejected'],
        default: 'applied'
    },
    date: {
        type: Date,
         default: Date.now
        },
    link: {
        type: String
    },
});

const Job=mongoose.model("Job",jobSchema);
export default Job; // export the model