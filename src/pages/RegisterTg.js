import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import NavbarComp from "../components/NavbarComp";

const RegisterTg = () => { 
  return (
    <div>
      <NavbarComp/>
      <div className="registertg min-vh-100 w-100" >
      
      <Container >
        <div className="rtg">
          <Row >
            <div className="text-center">
              <h3>Syarat dan Cara Daftar menjadi Tour Guide</h3>
            </div>
          </Row> 
          
        
          <Row >
            
            <Col>
            <FontAwesomeIcon icon="fa-solid fa-id-card" className="icon"/>
            <h5>Data Diri</h5>
            <p></p>
            <ul>
            <li>Nama Lengkap</li>
            <li>NIK</li>
            <li>Alamat Lengkap</li>
            <li>Domisili</li>
            <li>Usia</li>
            <li>Jenis Kelamin</li>
            <li>Email</li>
            <li>Nomor HP</li>
            <li>Deskripsi</li>
            </ul>
            </Col>
            <Col>
            <FontAwesomeIcon icon="fa-solid fa-file-circle-check" className="icon"/>
            <h5>Berkas File</h5>
            <p></p>
            <ul>
            <li>Foto Diri (file JPG)</li>
            <li>Foto KTP (file JPG)</li>
            <li>Foto selfi dengan KTP (JPG)</li>
            <li>Lisensi (opsional) (PDF)</li>
            </ul>
            </Col>
            <Col>
            <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" className="icon"/>
            <h5>Rekening Bank</h5>
            <p></p>
            <ul>
            <li>Nama Bank</li>
            <li>Nama Pemilik Rekening</li>
            <li>Nomor Rekening</li>
            <li>Foto Buku Tabungan</li>
            </ul>
            </Col>
            <Col>
            <FontAwesomeIcon icon="fa-solid fa-file-signature" className="icon"/>
            <h5>TTD Digital</h5>
            <p></p>
            <p>Simpan tanda tangan dalam<br/>
            bentuk file JPG dan kirimkan<br/>
            bersama file-file lainnya</p>
            </Col>
        </Row>
        <Row>
          <h4>Kirimkan semua persyaratan di atas ke email "tourgo.official@gmail.com"</h4>
          <Form.Text className="text-muted">
                    Sudah memiliki akun? <Link to="/logintg">Masuk</Link>
                  </Form.Text> 
                  
        </Row>
        </div>
      </Container>
    </div>
    </div>
    
  ); 
};

export default RegisterTg; 