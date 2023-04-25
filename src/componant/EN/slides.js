import { Carousel } from "react-bootstrap";
import "../EN/slides";
// import "./Header.css";
import img11 from "../../imges/11.jpg";
import img22 from "../../imges/22.jpg";
import img33 from "../../imges/11.jpg";

function Slides() {
  return (
    <section className="slide_Testimonials " id="EnSlide">
      <div className="row">
        <div className="col-med-12 col-sm-12">
          <p>Testimonials</p>
          <div className="slideCon">
            <Carousel>
              <Carousel.Item>
                {/* <img src={require("../../imges/11.jpg")} /> */}
                <img src={img11} alt="img11" />
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <h3>First slide label</h3>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={img22} alt="img22" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h3>Second slide label</h3>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={img33} alt="img33" />
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <h3>Third slide label</h3>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slides;
