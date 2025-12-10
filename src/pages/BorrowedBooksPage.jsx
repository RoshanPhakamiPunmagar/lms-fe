import React, { useEffect, useState } from "react";
import { Table, Badge, Button } from "react-bootstrap";
import { COLORS } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyBorrowAction,
  returnBookAction,
} from "../features/borrow/borrowAction";
import ReviewModal from "../components/ReviewModal";
import { createReviewAction } from "../features/review/reviewAction";

const BorrowedBooksPage = () => {
  const dispatch = useDispatch();
  // const data = [
  //   {
  //     title: "Clean Code",
  //     borrowDate: "2025-10-01",
  //     returnDate: "2025-10-15",
  //     status: "Returned",
  //   },
  //   {
  //     title: "Refactoring",
  //     borrowDate: "2025-10-10",
  //     returnDate: "2025-10-25",
  //     status: "Borrowed",
  //   },
  // ];

  const { myborrows } = useSelector((state) => state.borrowStore);
  // guard default to empty array to avoid crashes before data loads
  const borrows = myborrows || [];

  // modal state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedBorrow, setSelectedBorrow] = useState(null);

  useEffect(() => {
    dispatch(fetchMyBorrowAction());
  }, []);

  const handleReviewSubmit = (review) => {
    // TODO: replace with real dispatch e.g. dispatch(submitReviewAction(selectedBorrow._id, review))
    console.log("Review submitted for", selectedBorrow?._id, review);

    dispatch(createReviewAction(selectedBorrow?._id, review));
    setShowReviewModal(false);
    setSelectedBorrow(null);
  };

  return (
    <>
      <h3 className="mb-4">My Borrowed Books</h3>
      <Table responsive bordered hover style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows.map((item, idx) => (
            <tr key={idx}>
              <td>{item.bookTitle}</td>
              <td>{item?.borrowDate?.split("T")[0]}</td>
              <td>{item?.returnedDate?.split("T")[0]}</td>
              <td>
                <Badge
                  bg=""
                  style={{
                    backgroundColor:
                      item.status === "borrowed"
                        ? COLORS.accent
                        : item.status === "returned"
                        ? COLORS.returned
                        : COLORS.seafoam,
                  }}
                >
                  {item.status}
                </Badge>
              </td>
              <td>
                {item.status === "borrowed" ? (
                  <Button
                    style={{
                      backgroundColor: COLORS.accent,
                      borderColor: COLORS.accent,
                    }}
                    onClick={() => {
                      dispatch(returnBookAction(item._id));
                    }}
                  >
                    Return
                  </Button>
                ) : item.status === "returned" ? (
                  <>
                    <Button
                      style={{
                        backgroundColor: COLORS.dark,
                        borderColor: COLORS.dark,
                      }}
                      onClick={() => {
                        setSelectedBorrow(item);
                        setShowReviewModal(true);
                      }}
                    >
                      Review
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ReviewModal
        show={showReviewModal}
        onHide={() => {
          setShowReviewModal(false);
          setSelectedBorrow(null);
        }}
        borrow={selectedBorrow}
        onSubmit={handleReviewSubmit}
      />
    </>
  );
};

export default BorrowedBooksPage;
