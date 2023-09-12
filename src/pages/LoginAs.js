import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/img/logo/logo-putih-nyamping.png';
import NavbarComp from "../components/NavbarComp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginAs = () => { 
  return (
    <div className="loginas min-vh-100 w-100" id="loginas">
      <NavbarComp/>
      <Container>
      <Row>
            <Col xs={6}>
            <div>
                <Link to="/login" >
                <FontAwesomeIcon icon="fa-solid fa-backward" className="icon"/>
                </Link>
              
              </div>
              <div className="logi">
              <img src={Logo} width='400' height='150' alt=""/>
              <p>Temukan Tour Guide yang cocok dengan kamu untuk <br/>
              menemani perjalananmu, agar perjalanan <br/>
               menjadi lebih mudah dan aman </p>
              </div>
            
            </Col>
            <Col xs={6} className="nas text-center">
              <div>
                <h3>Masuk</h3>
                </div>
              <div>
              <Button as={Link} to={"/loginuser"} className="button">Masuk sebagai Wisatawan</Button>
              <p> </p>
              <h5>atau</h5> 
              <p>  </p>
              <Button as={Link} to={"/logintg"} className="button">Masuk sebagai Tour Guide</Button>
              <p> </p>
              <h5>atau</h5> 
              <p>  </p>
              <Button as={Link} to={"/loginadm"} className="button">Masuk sebagai Admin</Button>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
    ); 
};

export default LoginAs; 