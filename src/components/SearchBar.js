import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { findBooks } from "../store/actions/booksActions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
  state = { term: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.findBooks(this.state.term);
  };

  render() {
    const { term } = this.state;

    return (
      <Form className="mt-5" onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for books"
            aria-label="Search for books"
            aria-describedby="basic-addon2"
            value={term}
            name="term"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <InputGroup.Append>
            <Button type="submit" variant="outline-secondary">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { books: state.books, searchTerm: state.searchTerm };
};

const mapDispatchToProps = dispatch => {
  return {
    findBooks: title => dispatch(findBooks(title))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
