import { apiProcessor } from "../../services/api-processor/apiProcessor";

export const fetchPublicBookAPI = async () => {
  return apiProcessor({
    method: "get",
    url: "/books/public",
  });
};

export const fetchAllBookAPI = async () => {
  return apiProcessor({
    method: "get",
    url: "/books",
    isPrivate: true,
  });
};

// create book api
export const createBookAPI = async (data) => {
  return apiProcessor({
    method: "post",
    url: "/books",
    data,
    isPrivate: true,
    contentType: "multipart/form-data",
  });
};

// create book api
export const updateBookAPI = async (id, data) => {
  return apiProcessor({
    method: "patch",
    url: "/books/" + id,
    data,
    isPrivate: true,
    contentType: "multipart/form-data",
  });
};

// create book api
export const activateBookAPI = async (id, data) => {
  return apiProcessor({
    method: "patch",
    url: "/books/" + id,
    data,
    isPrivate: true,
  });
};
