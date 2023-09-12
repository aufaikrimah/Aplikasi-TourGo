import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

import spinnerLogo from "./dataws/logo-warna.png";

import Navbarws from "./Navbarws";
import Footerws from "./Footerws";

const Cartws = () => {
    const [item, setCartItems] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      fetchCartItems();
    }, []);
  
    const fetchCartItems = () => {
      axios.get('http://127.0.0.1:8000/api/cart')
        .then(response => {
          setCartItems(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };

  

    const removeCartItem = async (id) => {
      const isConfirm = await Swal.fire({
          title: 'Anda yakin  ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iya, Hapus !'
      }).then((result) => {
          return result.isConfirmed
      });

      if(!isConfirm){
          return;
      }

      await axios.delete(`http://127.0.0.1:8000/api/carts/destroy/${id}`).then(({data})=>{
          Swal.fire({
              icon:"success",
              text: data.message
          })
          fetchCartItems()
      }).catch(({response:{data}})=>{
          Swal.fire({
              text:data.message,
              icon: "error"
          })
      })
  }

  
    return (
    <div>
      <Navbarws/>
      <div className="cartws min-vh-100 w-100">
    
        <div className="container">
        <h2 className='text-center'>Keranjang Belanja</h2>
       
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
                      <div className='col-sm-8'>
                        <div className='a'>
                        <h6>{item.nama_tg}</h6>
                        <p>Harga: Rp.{item.price}/hari</p>
                        <p>Pesan berapa hari: {item.brp_hari}</p>
                        </div>
                      
                    </div>
                    <div className='col-sm-2'>
                      
                      <div className="link">
                      <div className='row'>
                      <button onClick={() => removeCartItem(item.id)} className='button'>Hapus</button>
                      </div>
                      <div className='row'>
                      <Link to={`/cart/${item.id}`} className="orderlink">Pesan Sekarang</Link>
                      </div>
                      
                      
                      </div>
                      
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

export default Cartws;