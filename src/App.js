import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import HomePage from "./pages/EN/1HomePage";
import Aboutme from "./pages/EN/2About_me_Page";
import Explore from "./pages/EN/3Explore_Foods_Page";
// import ARApp from "./AR/Ar-App";
import ARAbout from "./pages/AR/AR-2About_me_Page";
import Arexplore from "./pages/AR/AR-3Explore_Foods_Page";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import APPAR from "./APP-AR";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import Navs from "./componant/Header/Nav";

const APP = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/AR" element={<APPAR />} />
        <Route path="/araboutme" element={<ARAbout />} />
        <Route path="/arexplore" element={<Arexplore />} />
      </Routes>
    </Fragment>
  );
};

export default APP;
