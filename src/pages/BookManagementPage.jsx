import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { COLORS } from "../theme";
import {
  activateBookAction,
  fetchAllBookAction,
  updateBookAction,
} from "../features/book/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSelectedBook, setSelectedBook } from "../features/book/bookSlice";

const BookManagementPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sort, setSort] = useState("asc");
  const [displayBooks, setDisplayBooks] = useState([]);

  const { books } = useSelector((store) => store.bookStore);

  const toggleSort = () => {
    setSort((prev) => (prev == "asc" ? "dsc" : "asc"));
  };

  useEffect(() => {
    dispatch(fetchAllBookAction());
    dispatch(resetSelectedBook());
  }, []);

  useEffect(() => {
    let tempBookList = [...books];

    if (sort == "asc") {
      tempBookList = [...tempBookList].sort(
        (a, b) =>
          (Number(a.publishedYear) || 0) - (Number(b.publishedYear) || 0)
      );
    } else {
      tempBookList = [...tempBookList].sort(
        (a, b) =>
          (Number(b.publishedYear) || 0) - (Number(a.publishedYear) || 0)
      );
    }
    setDisplayBooks(tempBookList);
  }, [books, sort]);

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3>Book Management</h3>
        <Button
          style={{ backgroundColor: COLORS.accent, borderColor: COLORS.accent }}
          onClick={() => navigate("/dashboard/books/add")}
        >
          Add Book
        </Button>
        <Button
          style={{ backgroundColor: COLORS.accent, borderColor: COLORS.accent }}
          onClick={() => toggleSort()}
        >
          {sort}
        </Button>
      </div>
      <Table bordered hover style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Activate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayBooks.map((book, index) => {
            return (
              <tr key={book.id || index}>
                <td>{index + 1}</td>
                <td>
                  <img src={book.thumbnail} alt="" width={"100px"} />{" "}
                  {book.title}
                </td>
                <td>{book.author}</td>
                <td>{book.publishedYear}</td>
                <td>
                  {" "}
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    checked={book.status === "active"}
                    onChange={(e) => {
                      if (confirm("update status of book ?")) {
                        activateBookAction(
                          book._id,
                          e.target.checked ? "active" : "inactive"
                        );

                        dispatch(fetchAllBookAction());
                      }
                    }}
                  />
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                    onClick={() => {
                      // update selected Book
                      let bookObject = {
                        _id: book._id,
                        title: book.title,
                        author: book.author,
                        isbn: book.isbn,
                        thumbnail: book.thumbnail,
                        publishedYear: book.publishedYear,
                        description: book.description,
                      };

                      dispatch(setSelectedBook(bookObject));
                      navigate("edit");
                    }}
                  >
                    Edit
                  </Button>
                  <Button size="sm" variant="outline-danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BookManagementPage;
