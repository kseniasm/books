import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import BooksList from "./BooksList";
import BookItem from './BookItem';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";
import Pages from "./Pages";

class Favorites extends React.Component {

    state = {
        books: []
    }
    componentDidMount = () => {
        let books = Object.entries(JSON.parse(localStorage.getItem('favorites')));
        console.log(books);
        
        this.setState({books})
      
    }
  render() {
      console.log("FAVORITES: ", this.state.books);
      if (this.state.books.length === 0)
        return <div>Loading</div>
    return (
        <Container>
        <Row>
        {this.state.books.map(book => {
          return (
            <Col className="mt-5" key={book.id} xs={12} lg={2} md={6} xl={2}>
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
