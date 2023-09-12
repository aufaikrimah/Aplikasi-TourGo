import React, {useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from '../assets/img/logo/logo-putih-nyamping.png';
import NavbarComp from "../components/NavbarComp";

import axios from "axios";



const LoginTg = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setVallidation] = useState([]);


  const loginHandler = async (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append('email', email);
      formData.append('password', password);

      await axios.post('http://127.0.0.1:8000/api/login', formData)
      .then((response) => {
        const token = response.data.token;
        // Simpan token JWT ke localStorage
    localStorage.setItem('token', token);
    window.location.href = '/dashboard';
        
      })
      .catch ((error) => {
        setVallidation(error.response.data);
      })
  };


  return (
    <div className="loginuser min-vh-100 w-100" id="loginuser">
      <NavbarComp/>
      <Container>
      <Row>
            <Col xs={6} >
              <div>
              <Link to="/loginas">
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
            <Col xs={6} className="nas">
              
              <div>
              <form onSubmit={loginHandler} className="form">
              <div className="text-center">
                <h3>Masuk Sebagai Tour Guide</h3>
              </div>
              {
                validation.message && (
                  <div className="alert alert-danger">
                    {validation.message}
                  </div>
                )
              }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  
                </Form.Group>
                {
                validation.email && (
                    <h6>
                        {validation.email[0]}
                    </h6>
                )
              }


                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                {
                validation.password && (
                    <h6>
                        {validation.password[0]}
                    </h6>
                )
              }
                <p></p>
                <div className="text-center">
                <Button variant="primary" type="submit" className="btn">
                  Submit
                </Button> <br/>
                <Form.Text className="text-muted">
                    Belum memiliki akun? <Link to="/registertg">Daftar</Link>
                  </Form.Text> 
                  
                </div>
                
              </form>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
    ); 
};

export default LoginTg; 