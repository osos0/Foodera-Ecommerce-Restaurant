import React, { Component, Fragment } from "react";
// import Navs from "../../componant/EN/Nav";
import Home from "../../componant/EN/Home";
import Slides from "../../componant/EN/slides";
import Footers from "../../componant/EN/footers";
import Cards from "../../componant/EN/Card_Section/cards";
import Navbar from "../../componant/EN/Navbar";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        {/* <Navs /> */}
        <Home />
        <Cards />
        <Slides />
        <Footers />
      </Fragment>
    );
  }
}
export default HomePage;
