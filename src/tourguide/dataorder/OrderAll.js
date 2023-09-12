import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import moment from "moment";

import Header from "../../element/Header";
import Sidebar from "../../element/Sidebar";
import Footer from "../../element/Footer";

const OrderAll = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/allorder');
     // Convert the 'created_at' timestamps to Indonesia timezone
    const sortedOrders = response.data.map(order => ({
      ...order,
      created_at: moment(order.created_at).utcOffset('+0700').format('YYYY-MM-DD HH:mm:ss')
    }));

    // Sort the data based on the 'created_at' timestamp in descending order
    sortedOrders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setOrders(sortedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };


  return(
    <div class="wrapper">
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
                            <th>Kode Pemesanan</th>
                            <th>ID Tour Guide</th>
                            <th>Nama Tour Guide</th>
                            <th>Nama Pemesan</th>
                            <th>Gender Pemesan</th>
                            <th>Jumlah Hari</th>
                            <th>Tujuan Wisata</th>
                            <th>Total Bayar</th>
                            <th>Metode Bayar</th>
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
                                            <td>{row.id_tourguide } </td>
                                            <td>{row.nama_tg } </td>
                                            <td>{row.user.name } </td>
                                            <td>{row.user.gender } </td>
                                            <td>{row.brp_hari } </td>
                                            <td>{row.tujuan_wisata } </td>
                                            <td>{row.total_price } </td>
                                            <td>{row.metode_bayar } </td>
                                           
                                            
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

     );
}
export default OrderAll;



     
   

