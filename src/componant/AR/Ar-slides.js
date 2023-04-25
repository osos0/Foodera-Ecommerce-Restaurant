import { Component } from "react";
import { Carousel } from "react-bootstrap";
// import "./Header.css";
// import "../../Ar-Header.css";
// import "../../AR/Ar-Header.css";
import "../../Styles/Ar-Header.css";

class ARSlides extends Component {
  render() {
    return (
      <section className="slide_Testimonials" id="slidePlace">
        <div className="row ">
          <div className="col-med-12">
            <p>تقيمات</p>
            <div className="slideCon">
              <Carousel>
                <Carousel.Item>
                  {/* <img src={require("../../imges/11.jpg")} /> */}
                  {/* <img src={require("../../Ar-imges/11.jpg")} alt="11.jpg" /> */}
                  <img src={require("../../Ar-imges/11.jpg")} alt="11.jpg" />
                  <p>حقا كانت الطعام شهي و لم اتذوق مثل ذلك من قبل</p>
                  <h3>سالي جوزيف</h3>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <img src={require("../../imges/22.jpg")} /> */}
                  <img src={require("../../Ar-imges/22.jpg")} alt="22.jpg" />
                  <p>
                    كانت الخدمه باعلى جوده و الابتسامه لم تفارق موظفين المطعم{" "}
                  </p>
                  <h3>كريس اسامه</h3>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <img src={require("../../imges/11.jpg")} /> */}
                  <img src={require("../../Ar-imges/11.jpg")} alt="11.jpg" />
                  <p>
                    كانت وجبات الاطفال رائعه و صحيه و يجب انا اكرر التجربه مره
                    ثانيه
                  </p>
                  <h3>حبيبة محمود</h3>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ARSlides;
