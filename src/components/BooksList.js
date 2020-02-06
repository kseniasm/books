import React, {Fragment} from "react";
import BookItem from "./BookItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from 'react-redux';
import CardColumns from "react-bootstrap/CardColumns";
import {fetchBooks} from '../store/actions/booksActions';
import InfiniteScroll from "react-infinite-scroller";
import Loading from './Loading';
import Pages from './Pages';
import Container from 'react-bootstrap/Container';

class BooksList extends React.Component {


  componentDidMount(){
    this.props.fetchBooks('kitty', 0);
  }

  render() {
    
    if (this.props.loading)
      return <Loading />;
  // if (this.props.books.length === 0)
  //     return <div>Loadin</div>
    return (
      <Container>
        <Row>
        {this.props.books.map(book => {
          return (
            <Col className="mt-4" key={book.id} xs={12} lg={2} md={6} xl={2}>
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

  return { books: state.books,
        loading: state.loading };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks : (title, page) => dispatch(fetchBooks(title, page)) 
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

