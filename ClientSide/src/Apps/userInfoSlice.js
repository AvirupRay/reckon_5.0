import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //getting the data from local storage
  userInfos: JSON.parse(localStorage.getItem("userInformations")),
  //  { username: "", usertype: "", email: "" },
};

export const userInfoSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfos.username = action.payload.username;
      state.userInfos.usertype = action.payload.usertype;
      state.userInfos.email = action.payload.email;
      // state.userInfos = action.payload.usertype;

      //setting data in localstorage to keep the user logged in even after refreshing the web page
      let userData = JSON.stringify(state.userInfos);
      localStorage.setItem("userInformations", userData);
    },
    logOutUser: (state, action) => {
      state.userInfos.username = "";
      state.userInfos.usertype = "";
      state.userInfos.email = "";
      let userData = JSON.stringify(state.userInfos);
      localStorage.setItem("userInformations", userData);
    },
  },
});

export const { setUserInfo, logOutUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
