import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const HeroComp = () => { 
  return (
    <div className="hero min-vh-100 w-100">
      <Container>
        <Row>
          <Col className="text-white text-left">
          <h1>Tingkatkan Pengalaman<br/>
              Perjalananmu Bersama<br/>
              Tour Go</h1>
          </Col>
        </Row>
      </Container>
    </div>
    ); 
};

export default HeroComp; 