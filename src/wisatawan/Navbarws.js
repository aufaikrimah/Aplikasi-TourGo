import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import {
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../components/NavbarElements';

import Logo from "../assets/img/logo/logo-warna-nyamping.png";
import Cart from "../assets/img/icon/cart.png";
import Profil from "../assets/img/icon/profil.png";

function NavbarComp(){

  const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const fetchData = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get('http://127.0.0.1:8000/api/datauser')
        .then((response) => {

            setUserData(response.data);
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
            navigate('/login');
        });
    };


  return (
    <div className="sticky-top ">
      
      <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="/"><img src={Logo} width='170' height='60' alt='' className="logonav"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavMenu>
              <NavLink to='/homews' activeStyle className="mx-3">
                Home
              </NavLink>

              <NavLink to='/guidews' activeStyle className="mx-3">
              Tour Guide
              </NavLink>
              <NavLink to='/wisataws' activeStyle className="mx-3">
              Wisata
              </NavLink>
              <NavBtn>
              <NavBtnLink to='/cartws'>
                <img className="mx-3" src={Cart} width='40' height='40' alt='' /></NavBtnLink>
              <Link to=''>
                <img className="mx-3" src={Profil} width='40' height='40' alt='' /></Link>
                
                <NavDropdown
            title={userData.name}>
              <NavDropdown.Item href="/dataorder">Riwayat Pesanan</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              
              
            </NavDropdown>
            </NavBtn>
            </NavMenu>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
      
      
    </div>
    
  );
};

export default NavbarComp;


