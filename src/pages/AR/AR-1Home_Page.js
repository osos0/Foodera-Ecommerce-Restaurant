import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ARNavs from "./componant/Ar-Nav/Ar-Nav";
// import ARHome from "./componant/Ar-Home/Ar-Home";
import ARCards from "./componant/Card_Section/Ar-cards";
import ARSlides from "./componant/Ar-slider/Ar-slides";
import ARFooters from "./componant/Ar-Footer/Ar-footers";

function ARHome() {
  return (
    <Fragment>
      <ARNavs />
      {/* <ARHome /> */}
      <ARCards />
      <ARSlides />
      <ARFooters />
    </Fragment>
  );
}
export default ARHome;
