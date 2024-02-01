import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./foodSlice";
import foodSlice from "./foodSlice";
import modeSlice from "./modeSlice";
import userInfoSlice from "./userInfoSlice";

export const store = configureStore({
  reducer: { food: foodSlice, mode: modeSlice, userinfo: userInfoSlice },
});
