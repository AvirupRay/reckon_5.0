import mongoose from "mongoose";
import { DB_NAME } from " ../constant.js";

const connectDB = async () => {
  try {
    const connecInstandce = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMognoDB Connected!! DB Host:${connecInstandce.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB Connection ERROR!!");
    process.exit(1);
  }
};

export default connectDB;
