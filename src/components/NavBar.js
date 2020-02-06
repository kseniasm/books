import React from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import {NavLink} from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  className="nav"  >
      <Container>

        <Navbar.Brand as={NavLink} to="/"  >
        <FontAwesomeIcon className="brand-logo" icon={faBookOpen} />
          {/* <Link to="/" >Books</Link> */}
          <span className="brand-name" >Books</span>
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        {/* <Nav.Link  as={NavLink}  to="/favorites" >Favorites</Nav.Link> */}
 
        </Nav>
        <Nav>
          <Nav.Link  as={NavLink}  to="/favorites" className="nav-text" style={{color:"#7fcd91"}}>Favorites</Nav.Link>
          {/* <Nav.Link eventKey={2} href="#memes">
            Favorites
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
