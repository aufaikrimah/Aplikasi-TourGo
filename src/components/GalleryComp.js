import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Slider from "react-slick";
import Gallery1 from "../assets/img/gallery/gambar-1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class GalleryComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() { 
    
  return (
    <div className="gallery">
      <Container>
        <Row>
            <Col xs={12} md={12}>
              <h1>Kenapa Pakai Tour Go ?</h1>
            </Col>
        </Row>

        <Row className="sm-2">
            <Col xs={8} >
              <div>
                <Slider className="slider"
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={6}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className="icon"/>
                  </div>
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-circle-dollar-to-slot" className="icon"/>
                  </div>
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-route" className="icon"/>
                  </div>
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-list-check" className="icon"/>
                  </div>
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-headset" className="icon"/>
                  </div>
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-star" className="icon"/>
                  </div>
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-list-ol" className="icon"/>
                  </div>
                  <div>
                  <FontAwesomeIcon icon="fa-solid fa-circle-check" className="icon"/>
                  </div>
                </Slider>
                <Slider className="slider-2"
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}>
                   
                  <div className="slide">
                  <h2>Perjalanan aman.</h2>
                  <p>Terus merasa aman bersama Tour Go yang selalu menjaga dan terhubung dengan kamu selama perjalanan</p>
                  </div>
                  <div className="slide">
                  <h2>Transaksi aman.</h2>
                  <p>Uang kamu di jamin kembali jika tidak menerima layanan dari tour guide-nya Tour Go</p>
                  </div>
                  <div className="slide">
                  <h2>Rekomendasi perjalanan yang baik.</h2>
                  <p>Berdiskusi dengan tour guide untuk menentukan tujuan-tujuan wisata yang terbaik untuk kamu kunjungi</p>
                  </div>
                  <div className="slide">
                  <h2>Perjalanan terjadwal.</h2>
                  <p>Tour guide membantu kamu mengatur jadwal perjalanan yang efektif dan efisien untuk perjalanan kamu</p>
                  </div>
                  <div className="slide">
                  <h2>Customer service.</h2>
                  <p>Tempat traveler bertanya, mengkritik, memberikan saran, dan lainnya yang dapat terhubung terus menerus dengan Tour Go</p>
                  </div>
                  <div className="slide">
                  <h2>Feedback dan rating.</h2>
                  <p>Kamu bisa mendapatkan referensi untuk membangun kepercayaan untuk menggunakan tour go dari orang-orang yang sudah menggunakan Tour Go</p>
                  </div>
                  <div className="slide">
                  <h2>Pilihan tour guide yang banyak.</h2>
                  <p>Pilih berbagai tour guide dengan berbagai kelebihan dan keunikan masing-masing untuk menemani kamu selama perjalanan</p>
                  </div>
                  <div className="slide">
                  <h2>Tour guide berkualitas.</h2>
                  <p>Tour go menjaga kualitas tour guide yang menjadi partner dari tour guide dengan memastikan bahwa tour guide berlisensi/terlatih dan berpengalaman</p>
                  </div>
                  
                </Slider>
                
              </div>
            </Col>

            <Col xs={4}>
            <img  className="pic w-100"
              src={Gallery1} 
              alt="gallery-1"/>
            
           </Col>
        </Row>
      </Container>
    </div>
  ); 
}
}