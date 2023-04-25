import React, { Component, Fragment } from "react";
// import Navs from "../componant/Header/Nav";
// import Slides from "../componant/Header/slides";
// import Footers from "../componant/Header/footers";
// import Navs from "../../componant/EN/Nav";
import Slides from "../../componant/EN/slides";
import Footers from "../../componant/EN/footers";
import Navbar from "../../componant/EN/Navbar";

class About_Me_Page extends Component {
  render() {
    return (
      <Fragment>
        {/* <Navs /> */}
        <Navbar />
        <Slides />
        <Footers />
      </Fragment>
    );
  }
}
export default About_Me_Page;
