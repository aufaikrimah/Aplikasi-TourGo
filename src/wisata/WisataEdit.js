import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Header from "../element/Header";
import Sidebar from "../element/Sidebar";
import Footer from "../element/Footer";

function WisataEdit()
{  

const navigate = useNavigate();

const [wisata, setWisata] = useState(null);

    const [nama_wisata, setNamaWisata] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    
    const [validation, setValidation] = useState({});
    
     
    const {id}=   useParams();
     
    const[message, setMessage]= useState('');
 
    const [fileimage, setGambar]= useState('');

    const uploadWisata = async (e) => {
        e.preventDefault();
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('nama_wisata',nama_wisata);
        formData.append('deskripsi',deskripsi);
        formData.append('gambar', fileimage);

        try {
            const response= await axios.post(`http://127.0.0.1:8000/api/wisata/update/${id}`, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        });
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response);
        Swal.fire({
            icon:"success",
            text:"Berhasil Update Wisata !"
        })
        setTimeout(()=>{
            navigate('/listwisata');
        }, 200);
        } catch(error){
            setValidation(error.response.data);
        }

        
    }
    
    
   useEffect(() => {
    fetchDataWisata()
},[])
   
    function  fetchDataWisata() {
        axios.get(`http://127.0.0.1:8000/api/wisata/show/${id}`).then(function(response) {
            console.log(response);
            const wisataData = response.data.wisata;
                setNamaWisata(wisataData.nama_wisata);
                setDeskripsi(wisataData.deskripsi);
                setGambar(wisataData.fileimage);
        });
    }
   
    return(
        <div class="wrapper editwisata">
                <Header />
        <Sidebar />
        <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Data Wisata</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                    <li class="breadcrumb-item active">Edit Data Wisata</li>
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
                        <h3 class="card-title">Edit Data Wisata</h3>
                    </div>
                    <p className="text-success"><b>{ message }</b></p>                              
                 
                 <form onSubmit={ uploadWisata}>         
                 <div className="mb-3 row">
                 <div className="col-sm-1"></div>
                 <label  className="col-sm-3">Nama Wisata </label>
                 <div className="col-sm-7">
                     <input type="text" value={nama_wisata} className="form-control" name="name" onChange={(event)=>{setNamaWisata(event.target.value)}}/>
                     {
                validation.nama_wisata && (
                    <h6>
                        {validation.nama_wisata[0]}
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
                 <label  className="col-sm-3">Gambar Wisata</label>
                 <div className="col-sm-7">
                     <img src={`http://127.0.0.1:8000/storage/${fileimage}`} alt="" height={1} width={1} />
                     <input type="file" className="form-control" onChange={(e)=>setGambar(e.target.files[0])} />
                     {
                validation.gambar && (
                    <h6>
                        {validation.gambar[0]}
                    </h6>
                )
              }
                 </div>
                 </div>

                 <div className="mb-3 row">
                 <label className="col-sm-9"></label>
                 <div className="col-sm-3">
                 <button type="submit" className="btn btn-success">Submit</button> &nbsp;&nbsp;
                 <Link className="btn btn-danger" to={"/listwisata"}><i className="fa fa-undo"></i> Cancel</Link>
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
export default WisataEdit;

    