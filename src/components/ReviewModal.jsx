import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ReviewModal = ({ show, onHide, borrow, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!show) {
      setTitle("");
      setDescription("");
      setRating(0);
      setTouched(false);
    }
  }, [show]);

  const handleStarClick = (n) => {
    setRating(n);
    setTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!title.trim() || rating < 1) return;

    const review = {
      title: title.trim(),
      description: description.trim(),
      rating,
    };

    onSubmit && onSubmit(review);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Review {borrow?.bookTitle ? `- ${borrow.bookTitle}` : "Book"}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="reviewTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Short title for your review"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={touched && !title.trim()}
            />
            <Form.Control.Feedback type="invalid">
              Title is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="reviewDescription">
            <Form.Label>Description (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="What did you think of the book?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="reviewRating">
            <Form.Label>Rating</Form.Label>
            <div>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => handleStarClick(n)}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: 24,
                    color: n <= rating ? "#FFD700" : "#ddd",
                    padding: 4,
                  }}
                  aria-label={`${n} stars`}
                >
                  {n <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
            {touched && rating < 1 && (
              <div style={{ color: "#dc3545", fontSize: 12, marginTop: 6 }}>
                Please select a rating.
              </div>
            )}
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ReviewModal;
