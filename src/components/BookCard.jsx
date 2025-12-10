import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { COLORS } from "../theme";

const BookCard = ({ book }) => {
  return (
    <Card
      style={{
        backgroundColor: COLORS.white,
        border: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      }}
      className="h-100"
    >
      <Card.Img
        variant="top"
        src={book.thumbnail}
        style={{ height: 180, objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
          {book.author}
        </Card.Text>
        <Button
          as={Link}
          to={`/books/${book._id}`}
          size="sm"
          style={{ backgroundColor: COLORS.accent, borderColor: COLORS.accent }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
