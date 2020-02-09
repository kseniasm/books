import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { fetchBook } from "../store/actions/booksActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Toastr from "./Toastr";
import './App.css';

class BookDetails extends React.Component {
  state = {
    error: false,
    showToastr: false
  };

  componentDidMount = async () => {
    this.setState({ error: false });

    const error = await this.props.fetchBook(this.props.id);

    if (error) {
      this.setState({ error: true });
    }
  };

  saveToFavorites = () => {
    // let map = {}
    // localStorage.setItem("favorites", JSON.stringify(map));
    if (localStorage.getItem("favorites") === null) {
      let books = { [this.props.book.id]: this.props.book };
      localStorage.setItem("favorites", JSON.stringify(books));
    } else {
      let books = JSON.parse(localStorage.getItem("favorites"));

      if (!Object.keys(books).includes(this.props.book.id)) {
        books = { ...books, [this.props.book.id]: this.props.book };
        localStorage.setItem("favorites", JSON.stringify(books));
      }
    }

    this.setState({ showToastr: true });
  };

  renderAuthors = authors => {
    let authorsList = "";
    if (!authors || authors.length === 0) return authorsList;

    authors.forEach(author => {
      authorsList += ", " + author;
    });

    return authorsList.substring(2);
  };

  handleToastrClose = () => {
    this.setState({ showToastr: false });
  };


  render() {
    const { book } = this.props;

    if (this.state.error) 
      return <NotFound />;
    if (Object.entries(book).length === 0 || this.props.loading)
      return <Loading />;

    return (
      <Container className="mt-5" style={{ height: "100vh" }}>
        <Card style={{ backgroundColor: " #ccedd2" }} mb={3}>
          <Row className="no-gutters justify-content-center align-items-center">
            <Col
              md={4}
              sm={12}
              className="text-center "
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <Card.Img
                variant="top"
                style={{ width: "150px" }}
                src={
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail
                }
              />
            </Col>
            <Col md={8} sm={12}>
              <Card.Body className="details-text">
                <Card.Title className="details-title">
                  {book.volumeInfo.title}
                  <Button
                    style={{
                      float: "right",
                      marginRight: "5px",
                      backgroundColor: "#7fcd91"
                    }}
                    onClick={this.saveToFavorites}
                  >
                    <FontAwesomeIcon className="brand-logo" icon={faStar} />
                  </Button>
                </Card.Title>

                <Card.Text>
                  By{" "}
                  <span style={{ fontWeight: 600 }}>
                    {book.volumeInfo &&
                      this.renderAuthors(this.props.book.volumeInfo.authors)}
                  </span>
                </Card.Text>
                <Card.Text>{book.volumeInfo.publishedDate}</Card.Text>
                <Card.Text>{book.volumeInfo.description}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Toastr
          type="Success"
          text="This book has been added to your favorites"
          show={this.state.showToastr}
          handleToastrClose={this.handleToastrClose}
        />
        
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBook: id => dispatch(fetchBook(id))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.currentBook,
    loading: state.loading,
    id: ownProps.match.params.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
