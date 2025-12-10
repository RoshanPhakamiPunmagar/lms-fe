// create a function loginUser that takes email and password as parameters
// use apiProcessor to make a post request to /auth/login with email and password as data
// return the response from apiProcessor

import { apiProcessor } from "../../services/api-processor/apiProcessor";

export const loginUser = async (data) => {
  return apiProcessor({
    method: "post",
    url: "/auth/login",
    data,
  });
};

// Get user profile
export const fetchUser = async () => {
  return apiProcessor({
    method: "get",
    url: "/auth/users",
    isPrivate: true,
  });
};

// Get user profile
export const fetchNewAccessJWT = async () => {
  const { tokens } = await apiProcessor({
    method: "get",
    url: "/auth/renew-jwt",
    isPrivate: true,
    isRefreshToken: true,
  });

  if (tokens?.accessJWT) {
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    return true;
  }
  return false;
};
