import { Fragment } from "react";
import "./Cards.css";
import DaArray from "./data";

function Cards() {
  const sanData = DaArray.map((san) => {
    return (
      <div key={san.id} className="col-md-4 caden">
        <img src={require(`${san.Img}`)} alt="sanImage" />
        <h3>{san.name}</h3>
        <span>Time: {san.time} Minutes | Serves: 1</span>
        <h5>{san.price} </h5>
        <hr />
        <button>Order Now</button>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="container CardCon">
        <div className="row d-flex justify-content-center">{sanData}</div>
      </div>
    </Fragment>
  );
}

export default Cards;
