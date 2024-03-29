import mongoose, { Schema } from "mongoose";

const userdetailSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    collector: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserDetails = mongoose.model("allUserDetails", userdetailSchema);
