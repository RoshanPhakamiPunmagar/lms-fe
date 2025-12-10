import { setUser } from "./authSlice";
import { fetchNewAccessJWT, fetchUser, loginUser } from "./authAPI";
import { toast } from "react-toastify";

export const loginUserAction = (data) => async (dispatch) => {
  // login api
  const pending = loginUser(data);
  toast.promise(pending, { pending: "Please wait..." });

  // receive response
  const { status, message, tokens } = await pending;

  toast[status](message);

  if (status === "success") {
    // update token in storage
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    dispatch(fetchUserAction());

    // get user profile
  }
};

const fetchUserAction = () => async (dispatch) => {
  // fetch user profile
  // const {user} = await axios.get("/user", {Headers})
  const { user } = await fetchUser();
  if (user?._id) {
    // send user data to redux store
    dispatch(setUser(user));
  }
};

// Auto login feature
export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  //1. open in the new tab: accessJWT available
  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }

  //if only refreshJWT available
  if (refreshJWT) {
    //fetch the new accessJWT and set in session storage

    const isToken = await fetchNewAccessJWT();
    if (isToken) {
      //fetch user profile
      dispatch(fetchUserAction());
    }
  }
};
