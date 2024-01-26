import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../Features/foodSlice";

export const store = configureStore({
  reducer: foodReducer,
});
