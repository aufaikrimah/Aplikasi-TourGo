import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import Logo from "../assets/img/logo/logo-warna-nyamping.png";
import Cart from "../assets/img/icon/cart.png";
import Profil from "../assets/img/icon/profil.png";

const NavbarComp = () => {
  return (
    <div className="sticky-top ">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={Logo} width='170' height='60' alt='' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavMenu>
              <NavLink to='/' activeStyle className="mx-3">
                Home
              </NavLink>

              <NavLink to='/guide' activeStyle className="mx-3">
              Tour Guide
              </NavLink>
              <NavLink to='/wisata' activeStyle className="mx-3">
              Wisata
              </NavLink>
              <NavBtn>
              <NavBtnLink to='/cart'>
                <img className="mx-3" src={Cart} width='40' height='40' alt='' /></NavBtnLink>
              <NavBtnLink to='/login'>
                <img className="mx-3" src={Profil} width='40' height='40' alt='' /></NavBtnLink>
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


