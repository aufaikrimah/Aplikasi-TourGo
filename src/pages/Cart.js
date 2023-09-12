import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";

import Logo from "../assets/img/logo/logo-putih-nyamping.png";

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {

  return (
    <div>
       <NavbarComp/>
     
       <div className="cart min-vh-100 w-100">
      
      <Container>
        <Row>
          <Col className="log text-center">
          <div className="logo">
            <img src={Logo} width='500' height='180' alt=''/>
          </div>
          <div >
          <p>Silahkan login terlebih dahulu untuk dapat<br/> 
              mengakses halaman keranjang<br/>
              dan memulai pemesanan!</p>
          </div>
          <div>
            <Button as={Link} to={"/loginas"} className="button">    Masuk    </Button> 
          </div>
          </Col>
        </Row>
      </Container>
   
      
    </div>

      
      
    </div>
    
  );
};

export default Cart;