import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import BooksList from "./BooksList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";

import Home from "./Home";
import Favorites from "./Favorites";
import BookDetails from "./BookDetails";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Fragment >
      <Router>
          <NavBar />  
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/books/:id" component={BookDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      </Fragment>
    );
  }
}

export default App;
