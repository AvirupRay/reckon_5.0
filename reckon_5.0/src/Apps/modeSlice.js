import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
