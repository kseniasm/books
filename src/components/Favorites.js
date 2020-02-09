import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookItem from "./BookItem";
import Loading from "./Loading";
import "./App.css";

class Favorites extends React.Component {

  state = {
    books: []
  };

  componentDidMount = () => {
    let books = Object.entries(JSON.parse(localStorage.getItem("favorites")));

    this.setState({ books });
  };

  render() {
    if (this.state.books.length === 0) return <Loading />;
    return (
      <Container>
        <Row>
          {this.state.books.map(book => {
            return (
              <Col className="mt-5" key={book.id} xs={6} lg={2} md={4} xl={2}>
                <BookItem book={book[1]} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Favorites;
