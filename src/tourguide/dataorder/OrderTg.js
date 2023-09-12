import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import moment from "moment";


import spinnerLogo from "./logo-warna.png";

import Header from "../../element/Header";
import Sidebar from "../../element/Sidebar";
import Footer from "../../element/Footer";

const OrderTg = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/tourguide/orders');
     // Convert the 'created_at' timestamps to Indonesia timezone
    const sortedOrders = response.data.map(order => ({
        ...order,
        created_at: moment(order.created_at).utcOffset('+0700').format('YYYY-MM-DD HH:mm:ss')
      }));
  
      // Sort the data based on the 'created_at' timestamp in descending order
      sortedOrders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setOrders(sortedOrders);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };


    const deleteOrder = async (id) => {
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

        await axios.delete(`http://127.0.0.1:8000/api/order/delete/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text: data.message
            })
            fetchOrders()
        }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon: "error"
            })
        })
    }

  return(
    <div class="wrapper tourguide">
        {isLoading ? (
        // Tampilkan elemen spinner saat isLoading bernilai true
        <div className='spinner' animation="grow">
        <img src={spinnerLogo} alt="Spinner" className="loading" animation="grow"/>
        </div>
      ) : (
        <div>
            <Header />
    <Sidebar />
        <div class="content-wrapper">
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Data Pesanan TourGuide</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                    <li class="breadcrumb-item active">Data Pesanan TourGuide</li>
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
                            <h4 className="card-title">Data Pesanan</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <table id="example1" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Waktu Pesan</th>
                            <th>Kode Pesanan</th>
                            <th>Nama Pemesan</th>
                            <th>Email Pemesan</th>
                            <th>Gender Pemesan</th>
                            <th>Jumlah Hari</th>
                            <th>Tujuan Wisata</th>
                            <th>Total Bayar</th>
                            <th>Metode Bayar</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        

                      

{orders.length === 0 ? (
    <p>No orders found.</p>
  ) : (
    <tbody>
        {orders.map((row, key)=>(
                                            <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{row.created_at } </td>
                                            <td>{row.kode_pesan } </td>
                                            <td>{row.user.name } </td>
                                            <td>{row.user.email } </td>
                                            <td>{row.user.gender } </td>
                                            <td>{row.brp_hari } </td>
                                            <td>{row.tujuan_wisata } </td>
                                            <td>{row.total_price } </td>
                                            <td>{row.metode_bayar } </td>
                                           
                                            <td>

                                            <Button className="btn btn-xs btn-danger" onClick={()=>deleteOrder(row.id)}><i className="fa fa-trash"></i>
                                        Hapus
                                        </Button>
                                            </td>
                                            </tr>
                                            ))}
    </tbody>
                        
                        
                                            )}
                         
                        
                        
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
            )}

    </div>

     );
}
export default OrderTg;



     
   

