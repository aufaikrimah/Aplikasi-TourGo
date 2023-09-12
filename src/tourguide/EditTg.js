import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Header from "../element/Header";
import Sidebar from "../element/Sidebar";
import Footer from "../element/Footer";

function EditTg()
{  
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] =useState("");
    const [umur, setUmur] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [status, setStatus] = useState("");
    
    const [validation, setValidation] = useState({});
    
     
    const {id_tourguide}=   useParams();
     
    const[message, setMessage]= useState('');
 
    const [fileimage, setPhoto]= useState('');

    const uploadProduct = async (e) => {
        e.preventDefault();
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('name', name);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('gender',gender);
        formData.append('umur',umur);
        formData.append('date',date);
        formData.append('price',price);
        formData.append('deskripsi',deskripsi);
        formData.append('photo', fileimage);
        formData.append('status',status);

        try {
            const response= await axios.post(`http://127.0.0.1:8000/api/products/update/${id_tourguide}`, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        });
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response);
        Swal.fire({
            icon:"success",
            text:"Berhasil Update TourGuide !"
        })
        setTimeout(()=>{
            navigate('/productslist');
        }, 200);
        } catch(error){
            setValidation(error.response.data);
        }

        
    }
    
    
   useEffect(() => {
    fetchDataProduct()
},[])
   
    function fetchDataProduct() {
        axios.get(`http://127.0.0.1:8000/api/products/show/${id_tourguide}`).then(function(response) {
            console.log(response);
            const productData = response.data.product;
                setName(productData.name);
                setEmail(productData.email);
                setPassword(productData.password);
                setGender(productData.gender);
                setUmur(productData.umur);
                setDate(productData.date);
                setDeskripsi(productData.deskripsi);
                setPhoto(productData.fileimage);
                setStatus(productData.status);
        });
    }
    return(
        <div class="wrapper edittg">
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
                    <li class="breadcrumb-item active">Edit Data TourGuide</li>
                    </ol>
                </div>
                </div>
            </div>
            </section>
            <section class="content">
            <div class="container-fluid">
                <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Edit Data User</h3>
                    </div>
                    <p className="text-success"><b>{ message }</b></p>                              
                 
                 <form onSubmit={ uploadProduct}>         
                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Nama TourGuide </label>
                 <div className="col-sm-7">
                     <input type="text" value={name} className="form-control" name="name" onChange={(event)=>{setName(event.target.value)}}/>
                     {
                validation.name && (
                    <h6>
                        {validation.name[0]}
                    </h6>
                )
              }
                 </div>
                 
                 </div>
                 
         
                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Email </label>
                 <div className="col-sm-7">
                     <input type="email" value={email} className="form-control" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
                     {
                validation.email && (
                    <h6>
                        {validation.email[0]}
                    </h6>
                )
              }
                 </div>
                 </div>
         
                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Password </label>
                 <div className="col-sm-7">
                     <input type="password" value={password} className="form-control" name="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                     {
                validation.password && (
                    <h6>
                        {validation.password[0]}
                    </h6>
                )
              }
                 </div>
                 </div>
         
                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Gender </label>
                 <div className="col-sm-7">
                 <select name="gender" id="gender" value={gender} className="form-control"  onChange={(event)=>{setGender(event.target.value)}}>
        <option value="laki-laki">Laki-Laki</option>
        <option value="perempuan">Perempuan</option>
      </select>
                     {
                validation.gender && (
                    <h6>
                        {validation.gender[0]}
                    </h6>
                )
              }
                 </div>
                 </div>
         
                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Umur </label>
                 <div className="col-sm-7">
                     <input type="text" value={umur} className="form-control" name="umur" onChange={(event)=>{setUmur(event.target.value)}}/>
                     {
                validation.umur && (
                    <h6>
                        {validation.umur[0]}
                    </h6>
                )
              }
                 </div>
                 </div>
         
                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Sejak </label>
                 <div className="col-sm-7">
                     <input type="text" value={date} className="form-control" name="date" onChange={(event)=>{setDate(event.target.value)}}/>
                     {
                validation.date && (
                    <h6>
                        {validation.date[0]}
                    </h6>
                )
              }
                 </div>
                 </div>

                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Harga </label>
                 <div className="col-sm-7">
                     <input type="text" value={price} className="form-control" name="price" onChange={(event)=>{setPrice(event.target.value)}}/>
                     {
                validation.price && (
                    <h6>
                        {validation.price[0]}
                    </h6>
                )
              }
                 </div>
                 </div>



                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Deskripsi </label>
                 <div className="col-sm-7">
                     <input type="text" value={deskripsi} className="form-control" name="deskripsi" onChange={(event)=>{setDeskripsi(event.target.value)}} />
                     {
                validation.deskripsi && (
                    <h6>
                        {validation.deskripsi[0]}
                    </h6>
                )
              }
                 </div>
                 </div>

                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Product Image</label>
                 <div className="col-sm-7">
                     <img src={`http://127.0.0.1:8000/storage/${fileimage}`} alt="" height={1} width={1} />
                     <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])} />
                     {
                validation.photo && (
                    <h6>
                        {validation.photo[0]}
                    </h6>
                )
              }
                 </div>
                 </div>

                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Status</label>
                 <div className="col-sm-7">
                 <select name="status" id="status" value={status} className="form-control"  onChange={(event)=>{setStatus(event.target.value)}}>
        <option value=""></option>
        <option value="tidak tersedia">Tidak tersedia</option>
      </select>
                    
                 </div>
                 </div>

                 <div className="mb-3 row">
                 <label className="col-sm-9"></label>
                 <div className="col-sm-3">
                 <button type="submit" className="btn btn-success">Submit</button> &nbsp;&nbsp;
                 <Link className="btn btn-danger" to={"/productslist"}><i className="fa fa-undo"></i> Cancel</Link>
                 </div>
                 </div>

                 </form>
                    </div>
                    </div>
                <div class="col-md-6">

          </div>
        </div>
      </div>
    </section>
        
        </div>
        
        <Footer />

    </div>
    );
}
export default EditTg;