import {React, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarComp from "../components/NavbarComp";

import axios from "axios";
import Swal from "sweetalert2";

function RegisterUser(){ 

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [ttl, setTtl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    

    //define state validation
    const [validation, setValidation] = useState([]);


    //define history
    const navigate = useNavigate();


    //function "registerHanlder"
    const registerHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('ttl', ttl);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);

        
          
          
        //send data to server
        await axios.post('http://localhost:8000/api/register', formData)
        .then(() => {

          Swal.fire({
            icon:"success",
            text:'Berhasil Registrasi ! Silahkan Login'
        }) 
            //redirect to login page
            navigate('/loginuser');
        })
        .catch((error) => {
            //assign error to state "validation"
            setValidation(error.response.data);

           
            //handleErrors(formData)
            
        })
    };

  return (
    <div>
      <NavbarComp/>
      <div className="registeruser min-vh-100 w-100" id="registeruser">
      
      <Container >
        <div className="form">
      <Row >
        <div className="text-center">
                <h3>Daftar</h3>
              </div>
              </Row> 
       <Form onSubmit={registerHandler}>  
      <Row>
        <Col>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Nama</Form.Label>
                  <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama" />
                </Form.Group>
                {
                validation.name && (
                    <h6>
                        {validation.name[0]}
                    </h6>
                )
              }
                <Row>
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
                  
                </Row>
               
               
                
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
                
          
        </Col>
            <Col  >
              <div>
           
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" />
                </Form.Group>
                {
   validation.email && (
       <h6>
          {validation.email[0]}
       </h6>
   )
}
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Isi Password minimal 6 karakter" />
                </Form.Group>
                {
   validation.password && (
       <h6>
          {validation.password[0]}
       </h6>
   )
}
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Konfirmasi Password</Form.Label>
                  <Form.Control type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Konfirmasi Password diatas" />
                </Form.Group>
                {
   validation.password && (
       <h6>
          {validation.password[0]}
       </h6>
   )
}
                
                
              
              </div>
            </Col>
        </Row>
        <Row>
      
         
                <p> </p>
                <div className="text-center">
                <Button variant="primary" type="submit" className="btn">
                  Submit
                </Button> <br/>
                <Form.Text className="text-muted">
                    Sudah memiliki akun? <Link to="/loginuser">Masuk</Link>
                  </Form.Text>
                </div>
       
        </Row>
        </Form>
        </div>
      </Container>
    </div>
    </div>
    
    ); 
};

export default RegisterUser; 