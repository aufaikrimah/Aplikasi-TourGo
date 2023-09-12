import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";

import Header from "../element/Header";
import Sidebar from "../element/Sidebar";
import Footer from "../element/Footer";

function WisataCreate() {

    const navigate = useNavigate();

    const [wisata, setWisata] = useState(null);

    const [nama_wisata, setNamaWisata] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [fileimage, setGambar]= useState('');
    
    const [validation, setValidation] = useState({});

    const createWisata = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('nama_wisata',nama_wisata);
        formData.append('deskripsi',deskripsi);
        formData.append('gambar', fileimage);

        try {
            const response= await axios.post(`http://127.0.0.1:8000/api/wisata/create`, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        });
        console.log(response);
        Swal.fire({
            icon:"success",
            text:"Berhasil Tambah Wisata !"
        })
        setTimeout(()=>{
            navigate('/listwisata');
        }, 200);
        } catch(error){
            setValidation(error.response.data);
        }
    }
    
  return (
    <div class="wrapper useruser">
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
                    <li class="breadcrumb-item active">Create Data Wisata</li>
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
                        <h3 class="card-title">Creat Data Wisata</h3>
                    </div>

                    <Form id="quickForm" onSubmit={createWisata}>
                        <div className="card-body">
                            <Form.Group className="form-group">
                                <Form.Label>Nama Wisata</Form.Label>
                                <Form.Control type="text" placeholder="Nama Wisata ..." value={nama_wisata} onChange={(event)=>{setNamaWisata(event.target.value)}}/>
                                {
                                validation.nama_wisata && (
                                    <h6>
                                        {validation.nama_wisata[0]}
                                    </h6>
                                )
                            }
                            </Form.Group>
                           
                            
                  <Form.Group className="mb-3">
           <Form.Label>Deskripsi</Form.Label>
                  <Form.Control type="text" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} placeholder="Deskripsi..." />
                  {
   validation.deskripsi && (
       <h6>
          {validation.deskripsi[0]}
       </h6>
   )
}
                </Form.Group>
               
                            <Form.Group className="form-group">
                                <Form.Label>Gambar</Form.Label><img src={`http://127.0.0.1:8000/storage/${fileimage}`} alt="" height={1} width={1} />
                                <Form.Control type="file" placeholder="Email ..." onChange={(e)=>setGambar(e.target.files[0])}/>
                           
                                {
   validation.gambar && (
       <h6>
          {validation.gambar[0]}
       </h6>
   )
} </Form.Group>
                       
                           
                              </div>
                        <div className="card-footer">
                            <Button className="btn btn-primary" type="submit"><i className="fa fa-save"></i> Save Changes</Button> &nbsp;&nbsp;
                            <Link className="btn btn-danger" to={"/listwisata"}><i className="fa fa-undo"></i> Cancel</Link>
                        </div>
                    </Form>
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


export default WisataCreate;


