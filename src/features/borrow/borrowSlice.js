// create a borrowSlice. name is auth and initial state have user property
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myborrows: [],
};

const borrowSlice = createSlice({
  name: "borrows",
  initialState,
  reducers: {
    setMyBorrows: (state, action) => {
      state.myborrows = action.payload;
    },
  },
});

export const { reducer, actions } = borrowSlice;
export const { setMyBorrows } = actions;
export default reducer;
