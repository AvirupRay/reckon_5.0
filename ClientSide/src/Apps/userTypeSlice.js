import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userTypeNow: "",
};

export const userTypeSlice = createSlice({
  name: "userType",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userTypeNow = action.payload;
    },
  },
});

export const { setUserType } = userTypeSlice.actions;

export default userTypeSlice.reducer;
