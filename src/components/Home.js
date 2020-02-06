import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import BooksList from "./BooksList";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";
import Pages from "./Pages";
import Header from './Header';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <Fragment>

          <Header />
        {/* <div className="header-img">
          <Row className="justify-content-center ">
            <Col md="8" lg="8" xs="12">
              <SearchBar />
            </Col>
          </Row>
        </div> */}

        {/* <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h1 class="font-weight-light">Vertically Centered Masthead Content</h1>
        <p class="lead">A great starter layout for a landing page</p>
      </div>
    </div>
  </div> */}

        <BooksList />
      </Fragment>
    );
  }
}

export default Home;
