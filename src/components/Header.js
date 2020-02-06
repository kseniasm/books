import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <div className="header-img pt-5">
      <Row className="justify-content-center align-items-end h-25" >
        <Col className="text-center" md="8" lg="8" xs="12">
          <span className="header-text">Discover your books</span>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-start">
        <Col  md="8" lg="8" xs="12">
          <SearchBar />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
