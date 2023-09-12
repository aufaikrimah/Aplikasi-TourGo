import React, {Component} from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import Point1 from "../assets/img/gallery/point-1.png";
import Point2 from "../assets/img/gallery/point-2.png";
import Point3 from "../assets/img/gallery/point-3.png";
import Point4 from "../assets/img/gallery/point-4.png";
import Point5 from "../assets/img/gallery/point-5.png";
import Point6 from "../assets/img/gallery/point-6.png";

export default class PointComp extends Component {
  render() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #FF9B04`
      );
    }
  };
  return (
    <div className="point w-100">
      <Container>
    <div className="s-point">
      <h2>Tukarkan Poin mu</h2>
      <Slider {...settings}>
      <div>
        <img  className="w-200"
        src={Point1} 
        alt="point-1"/>
        </div>
        <div>
        <img  className="w-200"
        src={Point2} 
        alt="point-2"/>
        </div>
        <div>
        <img  className="w-200"
        src={Point3} 
        alt="point-3"/>
        </div>
        <div>
        <img  className="w-200"
        src={Point4} 
        alt="point-4"/>
        </div>
        <div>
        <img  className="w-200"
        src={Point5} 
        alt="point-5"/>
        </div>
        <div>
        <img  className="w-200"
        src={Point6} 
        alt="point-6"/>
        </div>
      </Slider>
    </div>
    </Container>
    </div>
  );
}
}
