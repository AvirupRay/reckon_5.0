import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Foodlist: [],
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFoodItems: (state, action) => {
      const foodItem = {
        name: action.payload.name,
        quantity: action.payload.quantity,
        date: action.payload.date,
        id: nanoid(),
      };
      state.Foodlist.push(foodItem);
    },
  },
});

export const { addFoodItems } = foodSlice.actions;

export default foodSlice.reducer;
