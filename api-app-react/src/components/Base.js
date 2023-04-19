import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Body from "./Body";
import { Fragment } from "react";
import Home from "../pages/Home";
const Base = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default Base;
