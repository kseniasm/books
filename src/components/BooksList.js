import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { fetchBooks } from "../store/actions/booksActions";
import BookItem from "./BookItem";
import Loading from "./Loading";
import Pages from "./Pages";

class BooksList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks(this.props.searchTerm, 0);
  }

  render() {
    if (this.props.loading) return <Loading />;

    return (
      <Container>
        <Row>
          {this.props.books.map(book => {
            return (
              <Col className="mt-4" key={book.id} xs={6} lg={2} md={4} xl={2}>
                <BookItem book={book} />
              </Col>
            );
          })}
        </Row>
        <Pages />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    loading: state.loading,
    searchTerm: state.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: (title, page) => dispatch(fetchBooks(title, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
