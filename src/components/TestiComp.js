import React, {Component} from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import Testi1 from "../assets/img/gallery/review-1.png";
import Testi2 from "../assets/img/gallery/review-2.png";
import Testi3 from "../assets/img/gallery/review-3.png";
import Testi4 from "../assets/img/gallery/review-4.png";
import Testi5 from "../assets/img/gallery/review-5.png";

export default class TestiComp extends Component {
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
    <div className="testi w-100">
      <Container>
    <div className="s-testi">
      <h2>Testimoni</h2>
      <Slider {...settings}>
      <div>
        <img  className="w-200"
        src={Testi1} 
        alt="review-1"/>
        </div>
        <div>
        <img  className="w-200"
        src={Testi2} 
        alt="review-2"/>
        </div>
        <div>
        <img  className="w-200"
        src={Testi3} 
        alt="review-3"/>
        </div>
        <div>
        <img  className="w-200"
        src={Testi4} 
        alt="review-4"/>
        </div>
        <div>
        <img  className="w-200"
        src={Testi5} 
        alt="review-5"/>
        </div>
      </Slider>
    </div>
    </Container>
    </div>
  );
}
}
