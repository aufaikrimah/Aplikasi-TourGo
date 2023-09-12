import React, { useEffect, useState } from "react";

import {Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import Tandaseru from "../src/assets/img/icon/tandaseru.png";
import spinnerLogo from "../src/assets/img/logo/logo-warna.png";

import Header from "./element/Header";
import Sidebar from "./element/Sidebar";
import Footer from "./element/Footer";

function Dashboard() {
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const token = localStorage.getItem("token");

    const fetchData = async (props) => {

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
        {(() => { if (user.level === 'admin') { return (
    <div class="wrapper">
            <Header />
    <Sidebar />
        <div class="content-wrapper">
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Dashboard</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><Link href="/dashboard">Home</Link></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
                </div>
            </div>
            </section>

            <section class="content">
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                    <div class="card">
                    
                    <div class="card-body">
                        <table id="example1" class="table table-bordered table-striped">
                        
                        <h1>Selamat datang {user.name}</h1>
                        
                        </table>
                    </div>
                    
                    </div>
                
                </div>
            
                </div>
            
            </div>
            
            </section>
        
        </div>
        
        <Footer />

    </div>
    );}})()}
    {(() => { if (user.level === 'tourguide') { return (
    <div class="wrapper">
            <Header />
    <Sidebar />
        <div class="content-wrapper">
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Dashboard</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><Link href="/dashboard">Home</Link></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
                </div>
            </div>
            </section>

            <section class="content">
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                    <div class="card">
                    <div class="card-body">
                        <table id="example1" class="table table-bordered table-striped">
                        
                        <h1>Selamat datang, {user.name}</h1>
                        
                        </table>
                    </div>
                    
                    </div>
                
                </div>
            
                </div>
            
            </div>
            
            </section>
        
        </div>
        
        <Footer />

    </div>
    );}})()}

    {(() => { if (user.level === 'wisatawan') { return (
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


export default Dashboard;


