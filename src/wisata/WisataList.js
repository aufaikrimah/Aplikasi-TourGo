import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
 
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../element/Header";
import Sidebar from "../element/Sidebar";
import Footer from "../element/Footer";
import Swal from "sweetalert2";

function WisataList()
{ 
    const[wisata, setWisata]= useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchDataWisata();
    },[]);

    const fetchDataWisata = async () => {
        await axios.get(`http://127.0.0.1:8000/api/wisata`).then(({data})=>{
            setWisata(data)
        })
    }
  

    const deleteWisata = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Anda yakin ?',
            text: 'Data tidak akan bisa dikembalikan setelah dihapus !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
        }).then((result) => {
            return result.isConfirmed
        });

        if(!isConfirm){
            return;
        }

        await axios.delete(`http://127.0.0.1:8000/api/wisata/delete/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text: data.message
            })
            fetchDataWisata()
        }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon: "error"
            })
        })
    }
     
    return(
        <div class="wrapper">
                <Header />
        <Sidebar />
            <div class="content-wrapper">
                <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Data Tempat Wisata</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                        <li class="breadcrumb-item active">Data Wisata</li>
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
                                <h4 className="card-title">Data Wisata</h4>
                                <Link to={"/createwisata"} className="btn btn-primary btn-round ml-auto">
                                    <i className="fa fa-plus"></i>
                                    &nbsp; Tambah Data Wisata
                                </Link>
                            </div>
                        </div>
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama_Wisata</th>
                                <th>Deskripsi</th>
                                <th>Gambar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {   wisata.length > 0 && (
                                            wisata.map((row, key)=>(
                                                <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{row.nama_wisata } </td>
                                                <td>{row.deskripsi } </td>
                                                <td><img src={`http://127.0.0.1:8000/storage/${row.gambar}`} alt="" height={50} width={90} /></td>
                                                
                                                <td><div>
                                                    <div className="row">
                                                    <Link to={`/editwisata/${row.id}`} className="btn btn-xs btn-primary">Edit</Link> &nbsp;
                                                    </div><div className="row">
                                                    <Button className="btn btn-xs btn-danger" onClick={() => deleteWisata(row.id)}><i className="fa fa-trash"></i>
                                        Hapus
                                        </Button></div></div>
                                                </td>
                                                </tr>
                                            ))
                                        )}
                             
                            </tbody>
                            
                            </table>
                        </div>
                        
                        </div>
                    
                    </div>
                
                    </div>
                
                </div>
                
                </section>
            
            </div>
            
            <Footer />
    
        </div>
    
         );
}
export default WisataList;






