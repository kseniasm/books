import React, { Fragment } from "react";
import Header from "./Header";
import BooksList from "./BooksList";
import "./App.css";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <BooksList />
    </Fragment>
  );
};

export default Home;
