// create a axios api processor with base url from environment variable VITE_API_BASE_URL
import axios from "axios";
import { fetchNewAccessJWT } from "../../features/auth/authAPI";

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshToken,
  contentType = "application/json",
}) => {
  try {
    const headers = {
      Authorization: isPrivate
        ? isRefreshToken
          ? localStorage.getItem("refreshJWT")
          : sessionStorage.getItem("accessJWT")
        : null,
      "Content-Type": contentType,
    };

    //add base url from environment variable VITE_API0
    //

    const apiUrl = import.meta.env.VITE_API_BASE_URL + url;
    const respons = await axios({
      method,
      url: apiUrl,
      data,
      headers,
    });

    return respons.data;
  } catch (error) {
    console.log(error);
    const message = error.response
      ? error.response.data.message
      : error.message;

    if (message == "jwt expired") {
      console.log("make api call to renew the token");
      const tokenRenewed = await fetchNewAccessJWT();
      if (tokenRenewed) {
        return apiProcessor({ method, url, data, isPrivate });
      }
    }
    return { status: "error", message };
  }
};
