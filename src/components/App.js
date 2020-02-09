import React, { Fragment} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Favorites from "./Favorites";
import BookDetails from "./BookDetails";
import "./App.css";

const App = () => {
  return (
    <Fragment>
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
};

export default App;
