import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";


const BookItem = ({ book }) => {
  return (
    <Card
      as={NavLink}
      to={`/books/${book.id}`}
      style={{ height: "280px", backgroundColor: " #ccedd2" }}
    >
      <Card.Img
        variant="top"
        src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
        style={{ height: "200px" }}
      />
      <Card.Body style={{ overflow: "hidden" }}>
        <small className="text-muted">
          By {book.volumeInfo.authors && book.volumeInfo.authors[0]}{" "}
        </small>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
