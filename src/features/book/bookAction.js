import { toast } from "react-toastify";
import {
  activateBookAPI,
  createBookAPI,
  fetchAllBookAPI,
  fetchPublicBookAPI,
  updateBookAPI,
} from "./bookApi";
import { setBooks, setPubBooks } from "./bookSlice";

export const fetchPublicBookAction = () => async (dispatch) => {
  // fetch public book api

  const pending = fetchPublicBookAPI();

  const { status, message, books } = await pending;

  if (status === "success") {
    // update the pub book store
    dispatch(setPubBooks(books || []));
  }
};

export const fetchAllBookAction = () => async (dispatch) => {
  // fetch public book api

  const pending = fetchAllBookAPI();
  toast.promise(pending, { pending: "Books loading..." });

  const { status, message, books } = await pending;

  if (status === "success") {
    // update the pub book store
    dispatch(setBooks(books || []));
  }
};

// create book action
export const createBookAction = async (formData) => {
  // call create book api
  const pending = createBookAPI(formData);
  toast.promise(pending, { pending: "Books creating..." });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    return true;
  }
  return false;
};

export const updateBookAction = async (id, formData) => {
  // call create book api
  const pending = updateBookAPI(id, formData);
  toast.promise(pending, { pending: "Books updating..." });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    return true;
  }
  return false;
};

export const activateBookAction = async (id, sUpdate) => {
  // call create book api
  const pending = activateBookAPI(id, { status: sUpdate });
  toast.promise(pending, { pending: "Books updating..." });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    return true;
  }
  return false;
};
