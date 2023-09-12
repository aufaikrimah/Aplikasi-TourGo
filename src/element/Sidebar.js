import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import Logo from "../assets/img/logo/logo-warna-nyamping.png";


function Sidebar() {

    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const fetchData = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get('http://127.0.0.1:8000/api/datauser')
        .then((response) => {

            setUser(response.data);
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
 
        
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <Link href="#" class="brand-link">
            <img src={Logo} width='200' height='70' alt='' />
            </Link>

            <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                {/*<img src={Logo} className="img-circle elevation-2" style="opacity: .8" alt='User Image' />*/}
                </div>
                <div class="info">
                <Link href="#" class="d-block">{user.name}</Link>
                </div>
            </div>


            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                
                <li class="nav-item">
                    <Link to={"/dashboard"} class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Dashboard
                    </p>
                    </Link>
                </li>
                
                {(() => { if (user.level === 'admin') { return (
                    <li class="nav-item">
                    <Link to={"/listuser"} class="nav-link">
                    <i class="nav-icon fas fa-users"></i>
                    <p>
                        Data User
                    </p>
                    </Link>
                </li>

                );}})()}
                
                {(() => { if (user.level === 'admin') { return (
                    <li class="nav-item">
                    <Link to={"/productslist"} class="nav-link">
                    <i class="nav-icon fas fa-user-secret"></i>
                    <p>
                        Data Tour Guide
                    </p>
                    </Link>
                </li>

                );}})()}

                {(() => { if (user.level === 'admin') { return (
                    <li class="nav-item">
                    <Link to={"/listwisata"} class="nav-link">
                    <i class="nav-icon fas fa-route"></i>
                    <p>
                        Data Wisata
                    </p>
                    </Link>
                </li>

                );}})()}
                
                {(() => { if (user.level === 'tourguide') { return (
                    <li class="nav-item">
                    <Link to={"/profiletg"} class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>
                        Data Diri Tour Guide
                    </p>
                    </Link>
                </li>
                );}})()}
                {(() => { if (user.level === 'admin') { return (
                <li class="nav-item">
                    <Link to={"/allorder"} class="nav-link">
                    <i class="nav-icon fas fa-cubes"></i>
                    <p>
                        Data Pesanan (All)
                    </p>
                    </Link>
                </li>
                );}})()}
                {(() => { if (user.level === 'tourguide') { return (
                <li class="nav-item">
                    <Link to={"/dataordertg"} class="nav-link">
                    <i class="nav-icon fas fa-cubes"></i>
                    <p>
                        Data Pesanan
                    </p>
                    </Link>
                </li>
                );}})()}
                <li class="nav-item">
                    <Link onClick={logoutHandler} class="nav-link">
                    <i class="nav-icon fas fa-arrow-circle-left"></i>
                    <p>
                        Logout
                    </p>
                    </Link>
                </li>
                </ul>
            </nav>
            </div>
        </aside>

        


     );
 }


export default Sidebar;




