import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { connect } from "react-redux";
import { fetchBooks } from "../store/actions/booksActions";
import NotFound from "./NotFound";

class Pages extends React.Component {

 
  handleSubmit =  pageNumber => {

 
    let nextBookIndex = (pageNumber - 1) * 12; //12, 24

  
     this.props.fetchNextBooks("kitty", nextBookIndex);

  };
  render() {
    const { currentPage, numberOfPages } = this.props.pagination;

    
    console.log("pagination : ", this.props.pagination);

    const totalPages = Math.ceil(
      this.props.pagination.totalBooks / this.props.pagination.bookPerPage
    );

    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const pageNumbers = [];

    if (currentPage >Math.floor(numberOfPages / 2)) {
      if (currentPage >= totalPages - Math.floor(numberOfPages / 2)) {
        for (let i = numberOfPages; i > 0; i--) {
          pageNumbers.push(totalPages - i + 1);
        }
      } else {
        for (let i = 0; i < numberOfPages; i++) {
          pageNumbers.push(currentPage - Math.floor(numberOfPages / 2) + i);
        }
      }
    } else {
      for (let i = 0; i < numberOfPages; i++) {
        pageNumbers.push(i + 1);
      }
    }

    return (
      <Pagination className="mt-5 justify-content-center " >
        <Pagination.First onClick={() => this.handleSubmit(1)}/>
        <Pagination.Prev disabled={currentPage === 1} onClick={() => this.handleSubmit(currentPage-1)}/>

        {pageNumbers.map(number => (
          <Pagination.Item
            active={currentPage === number}
            key={number}
          
            onClick={() => this.handleSubmit(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next  disabled={currentPage === totalPages}  onClick={() => this.handleSubmit(currentPage+1)}/>
        <Pagination.Last onClick={() => this.handleSubmit(totalPages)}/>
      </Pagination>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    pagination: state.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNextBooks: (title, nextBookIndex) =>
      dispatch(fetchBooks(title, nextBookIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
