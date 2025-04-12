import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected successfully ${mongoose.connection.host}`);
    }
    catch(error){ 
        console.log(`mongodb connection failed ${error.message}`);
        process.exit(1);// 1 code means exits the process with failurey


    }
}
export default connectDB;