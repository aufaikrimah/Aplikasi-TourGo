import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";

import Header from "../element/Header";
import Sidebar from "../element/Sidebar";
import Footer from "../element/Footer";

function CreatUser() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [ttl, setTtl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [level, setLevel] = useState("");
    const [validation, setValidation] = useState({});

    const creatuser = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('ttl', ttl);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('level', level)

        await axios.post(`http://127.0.0.1:8000/api/user/store`, formData).then((data)=>{
            Swal.fire({
                icon:"success",
                text:"Sukses menambahhkan user !"
            })

            navigate('/listuser');

        }).catch((error)=>{
            setValidation(error.response.data);
        })
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
                    <h1>Data User</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                    <li class="breadcrumb-item active">Creat Data User</li>
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
                        <h3 class="card-title">Creat Data User</h3>
                    </div>

                    <Form id="quickForm" onSubmit={creatuser}>
                        <div className="card-body">
                            <Form.Group className="form-group">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control type="text" placeholder="Nama Lengkap ..." value={name} onChange={(event)=>{setName(event.target.value)}}/>
                                {
                validation.name && (
                    <h6>
                        {validation.name[0]}
                    </h6>
                )
              }
                            </Form.Group>
                           
                            <Form.Group className="mb-3" >
                           
                  
                    <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                    <option>Pilih</option>
                  <option value="laki-laki">Laki-Laki</option>
                  <option value="perempuan">Perempuan</option>
                </Form.Select>
                  </Form.Group>
                  {
                    validation.gender && (
                        <h6>
                            {validation.gender[0]}
                        </h6>
                    )
                  }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control type="text" value={ttl} onChange={(e) => setTtl(e.target.value)} placeholder="YYYY/MM/DD" />
                </Form.Group>
                {
   validation.ttl && (
       <h6>
          {validation.ttl[0]}
       </h6>
   )
}
                            <Form.Group className="form-group">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email ..." value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                            </Form.Group>
                            {
   validation.email && (
       <h6>
          {validation.email[0]}
       </h6>
   )
}
                            <Form.Group className="form-group">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password ..." value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                            </Form.Group>
                            {
   validation.password && (
       <h6>
          {validation.password[0]}
       </h6>
   )
}
                            <Form.Group className="form-group">
                                <Form.Label>Level</Form.Label>
                                <select className="form-control" value={level} onChange={(event)=>{setLevel(event.target.value)}}>
                                    <option value="level" hidden>-- Pilih Level --</option>
                                    <option value="admin">Admin</option>
                                    <option value="wisatawan">Wisatawan</option>
                                    <option value="tourguide">TourGuide</option>
                                </select>
                            </Form.Group>
                            {
   validation.level && (
       <h6>
          {validation.level[0]}
       </h6>
   )
}
                        </div>
                        <div className="card-footer">
                            <Button className="btn btn-primary" type="submit"><i className="fa fa-save"></i> Save</Button> &nbsp;&nbsp;
                            <Link className="btn btn-danger" to={"/listuser"}><i className="fa fa-undo"></i> Cancel</Link>
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


export default CreatUser;


