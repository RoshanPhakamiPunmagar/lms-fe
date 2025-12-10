import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { COLORS } from "../theme";
import {
  createBookAction,
  updateBookAction,
} from "../features/book/bookAction";
import { useSelector } from "react-redux";

const AddBookPage = () => {
  const navigate = useNavigate();

  const { selectedBook } = useSelector((store) => store.bookStore);

  const initialState =
    selectedBook && selectedBook?._id
      ? selectedBook
      : {
          title: "",
          author: "",
          isbn: "",
          publishedYear: "",
          description: "",
        };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm((s) => ({ ...s, [name]: files[0] }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    setForm((s) => ({ ...s, file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Object.keys(form) - > [title, isbn, author]

    // for (key in form) {
    //   formData.append(key, form[key]);
    // }

    Object.keys(form).forEach((key) => {
      if (key !== "_id") {
        formData.append(key, form[key]);
      }
    });

    let success = false;
    if (selectedBook?._id) {
      success = await updateBookAction(selectedBook._id, formData);
    } else {
      success = await createBookAction(formData);
    }

    if (success) {
      navigate("/dashboard/books");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h3> {selectedBook?._id ? "Edit" : "Aadd"} Book</h3>
        <Button
          variant="secondary"
          onClick={() => navigate("/dashboard/books")}
          style={{ backgroundColor: COLORS.accent, borderColor: COLORS.accent }}
        >
          Back
        </Button>
      </div>

      <Form onSubmit={handleSubmit} style={{ background: "#fff", padding: 20 }}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="author"
                value={form.author}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="isbn">
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                name="isbn"
                value={form.isbn}
                onChange={handleChange}
                required
                disabled={selectedBook?._id}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="publishedYear">
              <Form.Label>Published Year</Form.Label>
              <Form.Control
                name="publishedYear"
                value={form.publishedYear}
                onChange={handleChange}
                type="number"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            {/* <Form.Group className="mb-3" controlId="thumbnail">
              <Form.Label>Thumbnail URL</Form.Label>
              <Form.Control
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
                required
              />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {form.thumbnail ? (
              <>
                <img src={form.thumbnail} alt="" width="200px" />
              </>
            ) : (
              <></>
            )}

            <Form.Group className="mb-3" controlId="file">
              <Form.Label>File</Form.Label>
              <Form.Control
                name="file"
                type="file"
                onChange={handleFile}
                required={!selectedBook?._id}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button
            type="submit"
            style={{
              backgroundColor: COLORS.accent,
              borderColor: COLORS.accent,
            }}
          >
            {selectedBook?._id ? "Update" : "Save"} Book
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddBookPage;
