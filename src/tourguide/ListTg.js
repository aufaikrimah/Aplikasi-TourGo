import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import Header from "../element/Header";
import Sidebar from "../element/Sidebar";
import Footer from "../element/Footer";



function ListTg()
{ 
    const[product, setProduct]= useState([]);
    const { id_tourguide } = useParams();

    useEffect(() => {
        fetchDataProduct();
    },[]);

    const fetchDataProduct = async () => {
        await axios.get(`http://127.0.0.1:8000/api/products`).then(({data})=>{
            data.sort((a, b) => a.user_id - b.user_id);
            setProduct(data)
        })
    }
  
    const deleteProduct = async (id_tourguide) => {
        const isConfirm = await Swal.fire({
            title: 'Anda yakin  ?',
            text: 'Data tidak akan bisa kembali setelah dihapus !',
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

        await axios.delete(`http://127.0.0.1:8000/api/product/delete/${id_tourguide}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text: data.message
            })
            fetchDataProduct()
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
                                <h4 className="card-title">Data Tour Guide</h4>
                                <Link to={"/productscreate"} className="btn btn-primary btn-round ml-auto">
                                    <i className="fa fa-plus"></i>
                                    &nbsp; Tambah Data Tour Guide
                                </Link>
                            </div>
                        </div>
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Umur</th>
                                <th>Sejak</th>
                                <th>Price</th>
                                <th>Deskripsi</th>
                                <th>Foto</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {   product.length > 0 && (
                                            product.map((row, key)=>(
                                                <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{row.name } </td>
                                                <td>{row.email } </td>
                                                <td>{row.gender } </td>
                                                <td>{row.umur } </td>
                                                <td>{row.date } </td>
                                                <td>{row.price } </td>
                                                <td>{row.deskripsi } </td>
                                                <td><img src={`http://127.0.0.1:8000/storage/${row.photo}`} alt="" height={100} width={100} /></td>
                                                <td>{row.status } </td>
                                                <td><div>
                                                    <div className="row">
                                                    <Link to={`/editproducts/${row.id_tourguide}`} className="btn btn-xs btn-primary">Edit</Link> &nbsp;
                                                    </div><div className="row">
                                                    <Button className="btn btn-xs btn-danger" onClick={() => deleteProduct(row.id_tourguide)}><i className="fa fa-trash"></i>
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
export default ListTg;


