import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../element/Header";
import Sidebar from "../element/Sidebar";
import Footer from "../element/Footer";

import spinnerLogo from "./dataorder/logo-warna.png";


    
const ProfileTg = () => {
    const [usertg, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetchProfile();
    }, []);
  
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profiletg');
        setUser(response.data.usertg[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
     
    return(
        <div class="wrapper tourguide">
             {isLoading ? (
        // Tampilkan elemen spinner saat isLoading bernilai true
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      ) : (
        <div>
                <Header />
        <Sidebar />
        
    <div class="content-wrapper">
                <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Data TourGuide</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                        <li class="breadcrumb-item active">Data TourGuide</li>
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
                        <div class="card-header">
                            <div className="d-flex align-items-center">
                                <h4 className="card-title">Data Diri</h4>
                               
                            </div>
                        </div>
                        <div class="card-body">
                        <div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={`http://127.0.0.1:8000/storage/${usertg.photo}`} alt="" height={250} width={250} />
                                </div>
                                <div className="col-sm-1">
                                    <p><strong>ID    </strong></p>
                                    <p><strong>Nama     </strong></p>
                                    <p><strong>Email    </strong></p>
                                    <p><strong>Gender   </strong></p>
                                    <p><strong>Umur     </strong></p>
                                    <p><strong>Sejak    </strong></p>
                                    <p><strong>Harga    </strong></p>
                                </div>
                                <div className="col">
                                    <p>:    {usertg.id_tourguide}</p>
                                    <p>:    {usertg.name}</p>
                                    <p>:    {usertg.email}</p>
                                    <p>:    {usertg.gender}</p>
                                    <p>:    {usertg.umur}</p>
                                    <p>:    {usertg.date}</p>
                                    <p>:    {usertg.price}/hari</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-9"><p><strong>Deskripsi   : </strong> {usertg.deskripsi} </p></div>
                                <div className="col"></div>
                                <div className="col">
                                
                                </div>
                            </div>
                            <div className="row"></div>
                            <div className="row">
                                <h6><strong>Catatan :</strong>  Anda tidak dapat merubah data diri anda sendiri, hubungi admin untuk perubahan informasi pada data diri anda</h6>
                                <h6><strong>CP Admin  :</strong> 081390362635 (WhatsApp)</h6>
                                <h6>Atau kirim email ke admin.tourgo@gmail.com</h6>
                            </div>

                        </div>
                            
                        </div>
                        
                        </div>
                    
                    </div>
                
                    </div>
                
                </div>
                
                </section>
            
            </div>
            
            <Footer />
            </div>
            )}
    
        </div>
    
         );
}
export default ProfileTg;


