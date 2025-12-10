import { toast } from "react-toastify";
import { fetchPublicBookAction } from "../book/bookAction";
import { borrowBookApi, fetchMyBorrowApi, returnBookApi } from "./borrowAPI";
import { setMyBorrows } from "./borrowSlice";

export const borrowBookAction = (id) => async (dispatch) => {
  // call borrow api
  const pending = borrowBookApi(id);
  toast.promise(pending, { pending: "Please wait..." });

  // receive response
  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(fetchPublicBookAction());
  }
};

// fetch my borrow action
export const fetchMyBorrowAction = () => async (dispatch) => {
  // call api
  const pending = fetchMyBorrowApi();
  toast.promise(pending, { pending: "Please wait..." });

  // receive response
  const { status, message, borrows } = await pending;
  // toast[status](message);

  if (status === "success") {
    // update redux borrow store
    dispatch(setMyBorrows(borrows));
  }
};

// return a book
export const returnBookAction = (borrowId) => async (dispatch) => {
  // call api
  const pending = returnBookApi(borrowId);
  toast.promise(pending, { pending: "Please wait..." });

  // receive response
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // update redux borrow store
    dispatch(fetchMyBorrowAction());
    dispatch(fetchPublicBookAction());
  }
};
