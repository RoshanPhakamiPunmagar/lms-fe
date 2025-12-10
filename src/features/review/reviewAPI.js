import { apiProcessor } from "../../services/api-processor/apiProcessor";

// create review
export const createReviewApi = async (borrowId, reviewData) => {
  return apiProcessor({
    method: "post",
    url: "/reviews/" + borrowId,
    data: reviewData,
    isPrivate: true,
  });
};
