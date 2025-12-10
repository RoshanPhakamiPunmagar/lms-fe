// create a bookSlice. name is auth and initial state have user property
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pubbooks: [],
  books: [],
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setPubBooks: (state, action) => {
      state.pubbooks = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
    resetSelectedBook: (state) => {
      state.selectedBook = {};
    },
  },
});

export const { reducer, actions } = bookSlice;
export const { setPubBooks, setBooks, setSelectedBook, resetSelectedBook } =
  actions;
export default reducer;
