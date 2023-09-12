import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";


import Navbarws from "../Navbarws";
import Logo from "./logo-warna-nurun.png";
import circleputih from "./circle.png";
import spinnerLogo from "./logo-warna.png";


function DetailGuide({ }) {
    const [product, setProduct] = useState(null);
    const [brp_hari, setBrphari] = useState(1);
    const { id_tourguide } = useParams();

    const [validation, setValidation] = useState({});
    
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchProduct();
    }, []);
  
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/show/${id_tourguide}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (!product) {
      
      return (
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      );
      
    }
  
    

    const handleAddToCart = () => {
      const data = {
        product_id: id_tourguide,
        brp_hari: brp_hari
      };
  
      axios.post('http://127.0.0.1:8000/api/carts', data)
        .then(response => {
          // Tambahkan logika penanganan respons dari server (jika diperlukan)
          Swal.fire({
            icon:"success",
            text:response.data.message
            
        })
          // Redirect ke halaman keranjang setelah berhasil menambahkan produk
          navigate('/cartws');
        })
        .catch((error) => {
          //assign error to state "validation"
          setValidation(error.response.data);

         
          //handleErrors(formData)
          
      })
    };

    return (
      <div >
        <Navbarws/>
        <div className="detailguide min-vh-100 w-100">
          <div className="container">
        <div className="card">
        <div className="row">
        <div className="col-sm-3">
        <img src={`http://127.0.0.1:8000/storage/${product.photo}`} alt="" height={300} width={300} />
        </div>
        <div className="col-sm-9">
        <div className="row">
        <div className="col-sm-10">
        <img src={circleputih} alt="" height={50} className='logo' />
          <h2>{product.name}</h2>
        <p>{product.deskripsi}</p>
        </div>
        <div className="col-sm-1"><img src={Logo} alt="" height={100} className='logo' /></div>
        
        
        </div>
        <div className="row item">
        <img src={circleputih} alt="" height={30} className='logo' />
        <div className="col-sm-1"></div>
        <div className="col-sm-2"><p className='text-center'>Usia </p><p className='text-center'><strong>{product.umur}</strong></p></div>
        <div className="col-sm-2"> <p className='text-center'>Gender  </p><p className='text-center'><strong>{product.gender}</strong></p></div>
        <div className="col-sm-2"><p className='text-center'>Sejak  </p><p className='text-center'><strong>{product.date}</strong></p></div>
        <div className="col-sm-2"><p className='text-center'>Daerah</p><p className='text-center'><strong>Yogyakarta</strong></p></div>
        <div className="col-sm-2"><p className='text-center'>Kuota trip</p><p className='text-center'><strong>1-6 orang</strong></p></div>
        <img src={circleputih} alt="" height={30} className='logo' />
        </div>
        </div>
        </div>


        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-11">
        <p><strong>Harga  : Rp.{product.price}/hari</strong></p>

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
        <div>
              <button onClick={handleAddToCart} className="product-add-button">Add to Cart</button>
        </div>
        </div>
        </div>
        
      </div>
      </div>
        </div>
        
      </div>
    );
  }
  
  export default DetailGuide;