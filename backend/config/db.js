import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://lehan:122335lrb@cluster0.tdsrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'); 
    console.log("DB connected");
  } catch (error) {
    console.error(`DB connection error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};
