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
    type: Date,
    required: true,
  },
  stock: {
    type: Boolean,
  },
});

export const allfoods = mongoose.model("allfoods", foodschema);
