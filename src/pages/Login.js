import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Logo from "../assets/img/logo/logo-putih-nyamping.png";
import NavbarComp from "../components/NavbarComp";

function Login() {
  return (
    <div>
      <NavbarComp/>
      <div className="login min-vh-100 w-100">
      
      <Container>
        <Row>
          <Col className="log text-center">
          <div className="logo">
            <img src={Logo} width='500' height='180' alt=''/>
          </div>
          <div >
          <p>Temukan Tour Guide yang cocok dengan kamu untuk <br/> 
              menemani perjalananmu, agar perjalananmu <br/>
              menjadi lebih mudah dan aman</p>
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
}

export default Login;