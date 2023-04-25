import React, { Component, Fragment } from "react";
// import Navs from "../../componant/EN/Navbar";
import Cards from "../../componant/EN/Card_Section/cards";
import Footers from "../../componant/EN/footers";
import Navbar from "../../componant/EN/Navbar";

class Explore extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Cards />
        <Footers />
      </Fragment>
    );
  }
}
export default Explore;
