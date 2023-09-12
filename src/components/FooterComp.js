import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterComp = () => { 
  return (
    <div  className="footer">
      <Container>
        <Row xs={{gutterX: 5}}>
          <Col xs={2}>
          <h3>Tour Go</h3>
          </Col>
          <Col xs={2}>
          <h3>Perusahaan</h3>
          </Col>
          <Col xs={2}>
          <h3>Produk</h3>
          </Col>
          <Col xs={2}>
          <h3>Dukungan</h3>
          </Col>
          <Col xs={4}>
          <h3>Ikuti Kami</h3>
          </Col>
        </Row>
        <Row>
        <Col xs={2}>
          <div>
            <h5>Whatsapp</h5>
            <p><a href="#link">0859 4304 4199</a></p>
          </div>
          <div>
            <h5>Email</h5>
            <p><a href="#link">TourGo2908@gmail.com</a></p>
          </div>
          <div>
            <h5>Call Center</h5>
            <p><a href="#link">0859 4304 4199</a></p>
          </div>
          </Col >
          <Col xs={2}>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Mitra Tour Go</p>
          <p>Blog</p>
          </Col>
          <Col xs={2}>
          <p>Tour Guide</p>
          </Col>
          <Col xs={2}>
          <p>Pusat Bantuan</p>
          <p>Kebijakan Privasi</p>
          <p>Syarat & Ketentuan</p>
          <p>FAQ</p>
          </Col>
          <Col xs={4}>
           <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon mx-2"/>
          <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon mx-2"/>
            <FontAwesomeIcon icon="fa-brands fa-youtube" className="icon mx-2"/> 
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="icon mx-2"/> 
            <FontAwesomeIcon icon="fa-brands fa-tiktok" className="icon mx-2"/>
           
          </Col>

        </Row>
        </Container>
    </div>
    ); 
};

export default FooterComp; 