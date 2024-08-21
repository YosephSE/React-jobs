import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default dbconnection;
