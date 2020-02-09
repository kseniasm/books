import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <FontAwesomeIcon className="brand-logo" icon={faBookOpen} />
          <span className="brand-name">Books</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link  as={NavLink}  to="/favorites" >Favorites</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/favorites"
              className="nav-text"
              style={{ color: "#7fcd91" }}
            >
              Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
