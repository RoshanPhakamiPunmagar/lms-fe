import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bookReducer from "../features/book/bookSlice";
import borrowReducer from "../features/borrow/borrowSlice";
// Create a basic store with no reducers (empty reducer object as requested)
const store = configureStore({
  // no reducers added as per request
  reducer: {
    authStore: authReducer,
    bookStore: bookReducer,
    borrowStore: borrowReducer,
  },
});

export default store;
