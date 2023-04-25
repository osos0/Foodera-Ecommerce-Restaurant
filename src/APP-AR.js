import "bootstrap/dist/css/bootstrap.min.css";
import { React, Fragment } from "react";
import ArNavs from "./componant/AR/Ar-Nav";
import ARHome from "./componant/AR/Ar-Home";
// import ARCards from "./AR/componant/Card_Section/Ar-cards";
import ARSlides from "./componant/AR/Ar-slides";
import ARFooters from "./componant/AR/Ar-footers";
import ARCards from "./componant/AR/Ar-Card-Section/Ar-cards";

const APPAR = () => {
  return (
    <Fragment>
      <ArNavs />
      <ARHome />
      {/* <ARCards /> */}
      <ARCards />
      <ARSlides />
      <ARFooters />
    </Fragment>
  );
};

export default APPAR;
