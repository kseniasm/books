import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
class BookItem extends React.Component {

  render() {
    const { book } = this.props;
    return (
      <Card as={NavLink} to={`/books/${book.id}`} style={{ height: "280px" , backgroundColor: " #ccedd2"}}>
        <Card.Img
          variant="top"
          src={
            book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
          }
          style={{ height: "200px" }}
        />
        <Card.Body style={{ overflow: "hidden" }}>
        <small className="text-muted">
            By {book.volumeInfo.authors && book.volumeInfo.authors[0]}{" "}
          </small>
          {/* <Card.Title  className="card-title" >
            {book.volumeInfo.title}
          </Card.Title> */}
          {/* <small className="text-muted">
            By {book.volumeInfo.authors && book.volumeInfo.authors[0]}{" "}
          </small> */}
          {/* <Card.Text>{book.volumeInfo.description}</Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">
            By {book.volumeInfo.authors && book.volumeInfo.authors[0]}{" "}
          </small>
        </Card.Footer> */}
      </Card>
    );
  }
}

export default BookItem;
