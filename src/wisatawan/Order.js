import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

import Navbarws from "./Navbarws";
import RekBca from "./dataws/rekbca.png";
import circleputih from "./dataws/circle.png";
import Logo from "./dataws/logo-item-nyamping.png";
import spinnerLogo from "./dataws/logo-warna.png";


function Order() {
    const [orderItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [brp_hari, setBrphari] = useState(1);
    const [tujuan_wisata, setTujuanWisata] = useState();
    const [metode_bayar, setMetodeBayar] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const [validation, setValidation] = useState({});
  
    useEffect(() => {
      fetchProduct();
    }, []);
  
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/carts/show/${id}`);
        setCartItems(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (!cartItems) {
      return <div>Loading...</div>;
    }
  
    const handleOrder = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/order', {
            cart_id: id,
            brp_hari: brp_hari,
            tujuan_wisata: tujuan_wisata,
            metode_bayar: metode_bayar,
          });
    
          // Proses respon dari API endpoint
          if (response.data.success) {
            // Tampilkan pesan sukses
            Swal.fire({
                icon:"success",
                text:"Berhasil Order"
            })
            navigate(`/order/${response.data.OrderId}`);
          } else {
            // Tampilkan pesan gagal
            console.log('Checkout gagal');
          }
        } catch (error) {
          // Tangani kesalahan
          setValidation(error.response.data);
        }
      };

 return (
   <div >
    <Navbarws/>
    {isLoading ? (
        // Tampilkan elemen spinner saat isLoading bernilai true
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      ) : (
    <div className="order min-vh-100 w-100">
    <div className="container">
            <div className='detailproducts'>
                <div className="card">
                    <form onSubmit={handleOrder}>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={`http://127.0.0.1:8000/storage/${cartItems.photo_tg}`} alt="" height={300} width={300} />
                                <img src={Logo} alt="" height={200}/>
                            </div>
                            <div className="col-sm-8 detail">
                                        <h2>{cartItems.nama_tg}</h2>
                                        <p><strong>Harga  : Rp.{cartItems.price}/hari</strong></p>
                                    <div>
                                        <label>Untuk berapa hari:</label>
                                        <input
                                            type="number"
                                            value={brp_hari}
                                            onChange={e => setBrphari(e.target.value)}
                                        />
                                         {
                                validation.brp_hari && (
                                    <h6 className='validation'> 
                                        {validation.brp_hari[0]}
                                    </h6>
                                )
                            }
                                    </div>
                                    <div>
                                      
                                        <label>Tujuan wisata</label>
                                        <select className="form-control" value={tujuan_wisata} onChange={e => setTujuanWisata(e.target.value)}>
                                            <option value="tujuan_wisata" hidden>-- Pilih Wisata --</option>
                                            <option value="Bantul">Bantul</option>
                                            <option value="Gunung Kidul">Gunung Kidul</option>
                                            <option value="KulonProgo">KulonProgo</option>
                                            <option value="Sleman">Sleman</option>
                                            <option value="Kota Yogyakarta">Kota Yogyakarta</option>
                                            <option value="Diskusi dengan tourguide">Diskusi dengan tourguide</option>
                                        </select>
                                        {
                                validation.tujuan_wisata && (
                                    <h6 className='validation'>
                                        {validation.tujuan_wisata[0]}
                                    </h6>
                                )
                            }
                                    </div>
                                    <div>
                                    <div className='row item'>
                                    <img src={circleputih} alt="" height={30} className='logo' />
                                      <div className='col-sm-9'>
                                      <h6>Untuk pembayaran kami hanya menyediakan metode transfer bank
                                       dan pembayaran langsung kepada tour guide saat bertemu di perjalanan wisata, 
                                       akan tetapi wisatawan boleh memilih cara bayar yang diinginkan yaitu : <br />
                                       1. Bayar di muka terlebih dahulu (DP) dengan nominal 50% dari total pembayaran <br />
                                       2. Membayar setelah klik pesan <br />
                                       3. Membayar setelah selesai melakukan perjalanan bersama tourguide (via transfer) <br />
                                       4. Membayar setelah selesai melakukan perjalanan bersama tourguide (bayar langsung ke tourguide) <br />

                                        </h6>
                                      </div>
                                      <div className='col-sm-3'>
                                      <img src={RekBca} alt="" height={100}/>
                                      </div>
                                      <img src={circleputih} alt="" height={30} className='logo' /> 
                                    </div>
                                      
                                        </div>
                                    <div>
                                        <label>Silahkan pilih cara pembayaran yang diinginkan</label>
                                        <select className="form-control" value={metode_bayar} onChange={e => setMetodeBayar(e.target.value)}>
                                            <option value="metode_bayar" hidden>-- Pilih Metode Bayar --</option>
                                            <option value="DP (Drop Payment)">DP (Drop Payment)</option>
                                            <option value="Bayar sekarang juga">Bayar sekarang juga</option>
                                            <option value="Bayar setelah selesai trip (via transfer)">Bayar setelah selesai trip (via transfer)</option>
                                            <option value="Bayar setelah selesai trip (bayar langsung ke tourguide)">Bayar setelah selesai trip (bayar langsung ke tourguide)</option>
                                        </select>
                                        {
                                validation.metode_bayar && (
                                    <h6 className='validation'>
                                        {validation.metode_bayar[0]}
                                    </h6>
                                )
                            }
                                    </div>
        
                                    <div>
                                        <button className="product-add-button">Pesan</button>
                                    </div>
                               
            
                            </div>

                                  
            
                                </div>
                      
                    </form>
                </div>
            </div>
        </div>
    </div>
         )}
    </div>
    );
  }
  
  export default Order;

  

 