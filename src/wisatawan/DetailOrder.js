import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbarws from "./Navbarws";
import spinnerLogo from "./dataws/logo-warna.png";


function DetailOrder() {

    const [orderItems, SetDataOrder] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProduct();
      }, []);
    
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/order/show/${id}`);
          SetDataOrder(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
    

 return (
  <div>
     <Navbarws/>
     {isLoading ? (
        // Tampilkan elemen spinner saat isLoading bernilai true
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      ) : (
    <div className="detailorder min-vh-100 w-100">
      <div className='container'>
      <div className='text-center'><h1>Detail Pesanan</h1></div>
      <div className='row'>

        <div className='col'>
          <div className='card'>
            <div className='bio'>
              <div className='row'>
                <div className='col'>
                  <img src={`http://127.0.0.1:8000/storage/${orderItems.photo_tg}`} alt="" height={300} width={300} />
                </div>
                <div className='col'>
                <p><strong>Kode Pemesanan : {orderItems.kode_pesan}</strong></p>
                  <h3><strong>{orderItems.nama_tg}</strong></h3>
                  <p><strong>Tujuan Wisata : {orderItems.tujuan_wisata}</strong></p>
                  <p><strong>Catatan :</strong> Harap screenshot dan halaman ini untuk berkomunikasi dengan tour guide dan menyimpan riwayat pesananmu </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>

        <div className='col'>
          <div className='card'>
          <div className='bio'>
            <div className='row'>
              <div className='col'>
                <p><strong>Harga sewa TourGuide</strong> </p>
                <p><strong>Hari Sewa</strong> </p>
                <p>---</p>
                <p><strong>Total Bayar</strong></p>
                <p><strong>Metode Pembayaran</strong></p>
              </div>
              <div className='col'>
                <p> : Rp.{orderItems.price}/hari</p>
                <p> : {orderItems.brp_hari} hari</p>
                <p>---------------------------*</p>
                <p> : Rp.{orderItems.total_price}</p>
                <p> : {orderItems.metode_bayar}</p>
              </div>
              
            </div>
            
            </div>
          </div>
          <div className='card'>
          <div className='bio'>
            <p><strong>Email Tour Guide :</strong> {orderItems.email_tg}</p>
            <p>Untuk detail waktu, pelaksanaan trip dan informasi lain yang 
                masih ingin didiskusikan dengan tour guide harap hubungi tour guide
                melalui email di atas </p>
            
                </div>
          </div>
              
        </div>
      
              
             
      </div>
        
              
    </div>
      </div>
        )}
  </div>
   
    );
  }
  
  export default DetailOrder;

  

 