import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ARNavs from "../../componant/AR/Ar-Nav";
// import ARCards from "../../AR/componant/Card_Section/Ar-cards";
import ARFooters from "../../componant/AR/Ar-footers";
import ARCards from "../../componant/AR/Ar-Card-Section/Ar-cards";

function Arexplore() {
  return (
    <Fragment>
      <ARNavs />
      {/* <ARCards /> */}
      <ARCards />
      <ARFooters />
    </Fragment>
  );
}
export default Arexplore;
