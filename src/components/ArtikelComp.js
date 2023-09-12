import React from "react";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from "react-bootstrap";
import Artikel1 from "../assets/img/gallery/artikel-1.png";
import Artikel2 from "../assets/img/gallery/artikel-2.png";
import Artikel3 from "../assets/img/gallery/artikel-3.png";
import Artikel4 from "../assets/img/gallery/artikel-4.png";

function ArtikelComp() {
  return (
    <div className="artikel">
      <Container>
        <Row>
            <Col xs={12} md={12}>
              <h2>Artikel</h2>
            </Col>
        </Row>
        <Row className="s-artikel">
          <Col>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={Artikel1} alt="artikel1" />
          <Card.Body>
            <Card.Title>Ini hari terbaik pesan tiket
              pesawat menurut Google Flights</Card.Title>
            <Card.Text>
              Berdasarkan penelitian Google Flights,
              penerbangan historis dari 1 Agustus 2017 sampai dengan 1 Agustus 2022
              diketahui bahwa hari menjadi faktor...
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Selengkapnya__</Card.Link>
          </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={Artikel2} alt="artikel2" />
          <Card.Body>
            <Card.Title>Mau Travel Belum Booster
              Cek Lokasi Vaksin di Peduli Lindungi!
            </Card.Title>
            <Card.Text>
              Jika maasyarakat ingin mendapatkan vaksin 
              booster, maka kalian dapat mengunjungi aplikasi 
              Peduli Lindungi untuk melihat dimana lokasi vaksin...
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Selengkapnya__</Card.Link>
          </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={Artikel4} alt="artikel4" />
          <Card.Body>
            <Card.Title>13 Agenda Wisata Jogja 
              November 2022, Konser 
              sampai Event Lari</Card.Title>
            <Card.Text>
              Tahun 2022 menyisakan dua bulan 
              terakhir, nih. Kamu yang ada wacana
              mau berlibur ke Jogja, kapan
              berangkat? TEmpat wisata yang...
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Selengkapnya__</Card.Link>
          </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={Artikel3} alt="artikel3" />
          <Card.Body>
            <Card.Title>Vaksin Booster Jadi Syarat 
              Traveling, Ini Penjelasan Kemenkes
            </Card.Title>
            <Card.Text>
            Pemerintah resmi menjadikan vaksin 
            booster atau dosis ketiga sebagai 
            syarat traveling terbaru. Meski
            demikian, cakupan vaksin booster...
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Selengkapnya__</Card.Link>
          </Card.Body>
      </Card>
      </Col>
    </Row>
    </Container>
    </div>
  );
}

export default  ArtikelComp;