import React, { useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import Tandaseru from "../assets/img/icon/tandaseru.png";
import spinnerLogo from "./dataws/logo-warna.png";

import HeroComp from "../components/HeroComp";
import GalleryComp from "../components/GalleryComp";
import PromoComp from "../components/PromoComp";
import PointComp from "../components/PointComp";
import TutorComp from "../components/TutorComp";
import TestiComp from "../components/TestiComp";
import ArtikelComp from "../components/ArtikelComp";
import FaqComp from "../components/FaqComp";
import FooterComp from "../components/FooterComp";
import NavbarWs from "./Navbarws";


function Home() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchData = async () => {

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await axios.get('http://127.0.0.1:8000/api/datauser')
      .then((response) => {

          setUser(response.data);
          setIsLoading(false);
      }) 
  }

  useEffect(() => {
      if(!token) {
          navigate('/');
      }
      fetchData();
  }, []);

  const logoutHandler = async () => {

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await axios.post('http://127.0.0.1:8000/api/logout')
      .then(() => {
          localStorage.removeItem("token");
          navigate('/loginas');
      });
  };

  return (
 
    <div>
       {isLoading ? (
        // Tampilkan elemen spinner saat isLoading bernilai true
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      ) : (
        <div>
      
      {(() => { if (user.level === 'wisatawan') { return (
      <div>
      <NavbarWs/>
      
      <HeroComp />

      {/* Content */}

      <GalleryComp />
      <PromoComp />
      <PointComp />
      <TutorComp />
      <TestiComp />
      <ArtikelComp />
      <FaqComp/>
      {/* Content */}

      <FooterComp />
      </div>
      );}})()}
      
      {(() => { if (user.level === 'admin') { return (
        <div className="login min-vh-100 w-100">
      
        <Container>
          <Row>
            <Col className="log text-center">
            <div className="logo">
              <img src={Tandaseru} width='200' height='200' alt=''/>
            </div>
            <div >
            <p>Akun anda tidak terdaftar untuk login disini ! </p>
            </div>
            <div>
              <Button onClick={logoutHandler} className="button"><h6>Kembali ke menu login</h6></Button> 
            </div>
            </Col>
          </Row>
        </Container>
     
        
      </div>
    
        
    );}})()}
    {(() => { if (user.level === 'tourguide') { return (
        <div className="login min-vh-100 w-100">
      
        <Container>
          <Row>
            <Col className="log text-center">
            <div className="logo">
              <img src={Tandaseru} width='200' height='200' alt=''/>
            </div>
            <div >
            <p>Akun anda tidak terdaftar untuk login disini ! </p>
            </div>
            <div>
              <Button onClick={logoutHandler} className="button"><h6>Kembali ke menu login</h6></Button> 
            </div>
            </Col>
          </Row>
        </Container>
     
        
      </div>
    
        
    );}})()}
    </div>

    )}
    </div>
  );
}


export default Home;
