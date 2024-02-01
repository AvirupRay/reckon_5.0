import mongoose, { Schema } from "mongoose";

const foodschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  stock: {
    type: Boolean,
  },
  location: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export const allfoods = mongoose.model("allfoods", foodschema);
