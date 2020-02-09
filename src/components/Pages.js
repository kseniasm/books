import React from "react";
import { connect } from "react-redux";
import { fetchNextBooks } from "../store/actions/booksActions";
import Pagination from "react-bootstrap/Pagination";
import "./App.css";

class Pages extends React.Component {
  handleSubmit = pageNumber => {
    let nextBookIndex = (pageNumber - 1) * this.props.pagination.booksPerPage;

    this.props.fetchNextBooks(this.props.searchTerm, nextBookIndex);
  };

  setPageNumbers = totalPages => {
    const { currentPage, numberOfPages } = this.props.pagination;

    let pageNumbers = [];

    if (currentPage > Math.floor(numberOfPages / 2)) {
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

    return pageNumbers;
  };

  render() {
    const { currentPage } = this.props.pagination;

    const totalPages = Math.ceil(
      this.props.pagination.totalBooks / this.props.pagination.booksPerPage
    );

    const pageNumbers = this.setPageNumbers(totalPages);

    return (
      <Pagination className="mt-5 justify-content-center ">
        {/* <Pagination.First
          disabled={currentPage === 1}
          onClick={() => this.handleSubmit(1)}
        /> */}
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => this.handleSubmit(currentPage - 1)}
        />

        {pageNumbers.map(number => (
          <Pagination.Item
            key={number}
            onClick={() => this.handleSubmit(number)}
            className={currentPage === number ? "active-page" : ""}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => this.handleSubmit(currentPage + 1)}
        />
        {/* <Pagination.Last
          disabled={currentPage === totalPages}
          onClick={() => this.handleSubmit(totalPages)}
        /> */}
      </Pagination>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    pagination: state.pagination,
    searchTerm: state.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNextBooks: (title, nextBookIndex) =>
      dispatch(fetchNextBooks(title, nextBookIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
