import React, { useEffect, useState } from 'react';
import axios from 'axios';

import circleputih from "./dataws/circle.png";
import Logo from "./dataws/logo-warna-nurun.png";
import spinnerLogo from "./dataws/logo-warna.png";

import Navbarws from "./Navbarws";
import Footerws from "./Footerws";

const DataOrder = () => {
    const [item, setOrders] = useState([]);
  
    useEffect(() => {
      fetchOrders();
    }, []);
  
    const fetchOrders = () => {
      axios.get(`http://127.0.0.1:8000/api/dataorder`)
        .then(response => {
          setOrders(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
  

  
    return (
    <div>
      <Navbarws/>
      <div className="cartws min-vh-100 w-100">
    
        <div className="container">
        <h2 className='text-center'>Riwayat Pesanan Anda</h2>
       
        {item.length === 0 ? (
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      ) : (
        <div>
          {item.map(item => (
            
             <div className="card">
              <div className="cartws-item" key={item.id}>
                
                <div className='row'>
                    <div className='col-sm-2'>
                    
                    
                      <img src={`http://127.0.0.1:8000/storage/${item.photo_tg}`} alt="" height={190} width={190} />
                      </div>
                      <div className='col-sm-3'>
                        <div className='a'>
                        <div>
                          <p>Kode Pemesanan : <strong>{item.kode_pesan}</strong></p>
                          </div>
                          <div>
                          <h6>{item.nama_tg}</h6>
                          </div>
                          <p>Email  : {item.email_tg}</p>
                        <p>Tujuan Wisata : {item.tujuan_wisata}</p>
                        
                        </div>
                      
                    </div>
                    <div className='col-sm-4'>
                    <img src={circleputih} alt="" height={40} className='logo' />
                    <p>Pesan {item.brp_hari} hari</p>
                    <p>Total Bayar  : Rp.{item.total_price}</p>
                        <p>Metode Bayar : {item.metode_bayar}</p>
                      
                      
                    </div>
                    <div className='col-sm-1'>
                    </div>
                    <div className='col-sm-1'>
                    <img src={Logo} alt="" height={190} />
                    </div>
                </div>
                
                  
             
              
              </div>
            </div>
          ))}
          </div> 
        )}
       </div>
    </div>
    <Footerws/>
    </div>
      
    );
  };

export default DataOrder;