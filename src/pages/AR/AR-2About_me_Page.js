import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import ARNavs from "./componant/Ar-Nav/Ar-Nav";
import ARNavs from "../../componant/AR/Ar-Nav";
import ARHome from "../../componant/AR/Ar-Home";
import ARFooters from "../../componant/AR/Ar-footers";

function ARAbout() {
  return (
    <Fragment>
      <ARNavs />
      <ARHome />
      <ARFooters />
    </Fragment>
  );
}
export default ARAbout;
