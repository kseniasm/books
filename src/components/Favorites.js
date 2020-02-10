import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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

  removeFromFavorites = (id) => {

  
      // let books = Object.entries(JSON.parse(localStorage.getItem("favorites")));

      let books = JSON.parse(localStorage.getItem("favorites"));
  
      for (let key in books) {

            if (key === id)
                delete books[key];
        }
        

      localStorage.setItem("favorites", JSON.stringify(books));

    this.setState({books: Object.entries(books)})
    }

  render() {
    if (this.state.books.length === 0) return <Loading />;
    return (
      <Container style={{ height: "100vh" }}>
        <Row>
          {this.state.books.map(book => {
            return (
              <Col className="mt-5" key={book[0]} xs={6} lg={2} md={4} xl={2}>
                <BookItem  book={book[1]} />
                <FontAwesomeIcon className="close-icon" icon={faTimes} onClick = {()=> this.removeFromFavorites( book[0])} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Favorites;
