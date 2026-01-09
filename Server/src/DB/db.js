import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connnected 👍");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
