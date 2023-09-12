import React, {Component} from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import Promo1 from "../assets/img/gallery/promo-1.png";
import Promo2 from "../assets/img/gallery/promo-2.png";
import Promo3 from "../assets/img/gallery/promo-3.png";
import Promo4 from "../assets/img/gallery/promo-4.png";
import Promo5 from "../assets/img/gallery/promo-5.png";

export default class PromoComp extends Component {
  render() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "500px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="promo w-100">
      <Container>
    <div className="s-promo">
      <h2>Promo</h2>
      <Slider {...settings}>
        <div>
        <img  className="w-200"
        src={Promo1} 
        alt="promo-1"/>
        </div>
        <div>
        <img  className="w-200"
        src={Promo2} 
        alt="promo-2"/>
        </div>
        <div>
        <img  className="w-200"
        src={Promo3} 
        alt="promo-3"/>
        </div>
        <div>
        <img  className="w-200"
        src={Promo4} 
        alt="promo-4"/>
        </div>
        <div>
        <img  className="w-200"
        src={Promo5} 
        alt="promo-5"/>
        </div>
      </Slider>
    </div>
    </Container>
    </div>
  );
}
}
