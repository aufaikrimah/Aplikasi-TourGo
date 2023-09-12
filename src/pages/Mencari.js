import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Logo from "../assets/img/logo/logo-putih-nyamping.png";
import NavbarComp from "../components/NavbarComp";

function Mencari() {
  return (
    <div className="mencari min-vh-100 w-100">
      <NavbarComp/>
      <Container>
        <Row>
          <Col className="log text-center">
          <div className="logo">
            <img src={Logo} width='500' height='180' alt=''/>
          </div>
          <div className="btn" >
          <Button as={Link} to={"/guide"} className="button"> Mencari Tour Guide </Button> 
          </div>
          <div className="btn">
            <Button as={Link} to={""} className="button"> Mencari Daerah </Button> 
          </div>
          </Col>
        </Row>
      </Container>
   
      
    </div>
  );
}

export default Mencari;