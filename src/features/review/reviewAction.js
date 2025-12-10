import { toast } from "react-toastify";
import { fetchMyBorrowAction } from "../borrow/borrowAction";
import { createReviewApi } from "./reviewAPI";

export const createReviewAction =
  (borrowId, reviewData) => async (dispatch) => {
    const pending = createReviewApi(borrowId, reviewData);
    toast.promise(pending, { pending: "Please wait..." });

    // receive response
    const { status, message } = await pending;
    toast[status](message);

    if (status === "success") {
      // update my borrows
      dispatch(fetchMyBorrowAction());
    }
  };
