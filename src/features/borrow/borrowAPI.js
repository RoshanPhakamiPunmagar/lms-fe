import { apiProcessor } from "../../services/api-processor/apiProcessor";

export const borrowBookApi = async (id) => {
  return apiProcessor({
    method: "post",
    url: "/borrows/" + id,
    isPrivate: true,
  });
};

// fetch my borrows
export const fetchMyBorrowApi = async () => {
  return apiProcessor({
    method: "get",
    url: "/borrows",
    isPrivate: true,
  });
};

// return book
export const returnBookApi = async (borrowId) => {
  return apiProcessor({
    method: "post",
    url: "/borrows/" + borrowId + "/return",
    isPrivate: true,
  });
};
