import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";

const BookList = ({ books = [] }) => {
  return (
    <Container className="my-4">
      <h4 className="mb-3">Available Books</h4>
      <Row className="g-3">
        {books.map((b) => (
          <Col key={b.id} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={b} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
