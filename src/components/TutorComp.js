import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Tutor from "../assets/img/gallery/gambar-2.png";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'ligth'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function TutorComp() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="tutor">
      <Container>
        <Row >
          <Col xs={12} md={12}>
          <h2>Tutorial</h2>
          </Col>
        </Row>
        <Row className="tutori row-cols-1">
          <Col xs={4}>
          <img  className="w-90"
              src={Tutor} 
              alt="tutor"/>

          </Col>
          <Col xs="8">
          <Accordion className="content" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className="head"
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography><h3>Tutorial Menjadi Partner Tour Go</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail" >
                  <Typography>
                  <p>1. Memilih "Daftar Sebagai Tour Guide"</p>
                  <p>2. Tour guide melakukan registrasi dan melengkapi bebagai hal yang diminta oleh Tour Go</p>
                  <p>3. Membaca dan menyetujui syarat dan ketentuan</p>
                  <p>4. Menunggu Tour Go memberikan informasi (diterima / ditolak) yang dikirim melalui email</p>
                  <p>5. Melakukan wawancara bersama pihak Tour Go</p>
                  <p>6. Menunggu Tour Go memberikan informasi lebih lanjut (diterima / ditolak) yang dikirim melalui email</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="content" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary className="head"
                  aria-controls="panel2bh-content"
                  id="panel2b-header"
                >
                  <Typography><h3>Tutorial Refund Pemesanan</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail">
                  <Typography>
                  <p>1. Baca syarat dan ketentuan jika ingin refund pemesanan kamu</p>
                <p>2. Klik “Batal Pemesanan”</p>
                <p>3. Masukkan alasan kamu membatalkan pemesanan </p>
                <p>4. Masukkan bukti dari alasan kamu membatalkan pemesanan</p>
                <p>5. Masukkan nomor rekening tempat uang refund akan di transfer</p>
                <p>6. Tunggu sampai pihak Tour Go mengkonfirmasi pembatalan kamu</p>
                <p>7. Jika disetujui oleh pihak Tour Go, ditunggu dalam beberapa hari uang kamu akan langsung di transfer kembali ke rekening kamu</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="content" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary className="head"
                  aria-controls="panel3b-content"
                  id="panel3b-header"
                >
                  <Typography><h3>Tutorial Pembayaran</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail">
                  <Typography>
                  <p>1. Setelah memilih tanggal kamu melakukan perjalanan </p>
                <p>2. Melakukan pengecekan kembali terhadap pesanan kamu</p>
                <p>3. Membaca syarat dan ketentuan </p>
                <p>4. Melakukan pembayaran dengan waktu maksimal 30 menit</p>
                <p>5. Tour Go akan mengirimkan kode booking kamu</p>
                <p>6. Kamu akan dikirim invoice yang berisi detail pesanan kamu dan harganya</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="content" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary className="head"
                  aria-controls="panel4b-content"
                  id="panel4b-header"
                >
                  <Typography><h3>Tutorial Pemesanan Tour Guide</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail">
                  <Typography>
                  <p>1. Lengkapi profil (data diri) kamu</p>
                <p>2. Kemudian konsumen masuk ke bagian pemesanan </p>
                <p>3. Lakukan pemilihan daerah yang akan dikunjungi </p>
                <p>4. Pilih tour guide yang tersedia dan paling sesuai dengan kamu</p>
                <p>5. Pilih tanggal dan lama kamu melakukan perjalanan</p>
                <p>6. lakukan pembayaran dengan waktu maksimal melakukan pembayaran dalam 30 menit</p>
                <p>7. jika pembayaran selesai, maka konsumen akan mendapatkan kode booking dari Tour Go </p>
                <p>8. Konsumen akan melakukan diskusi dengan Tour Guide yang kamu pilih dan</p> 
                <p>9. Tour Go akan membuat jadwal untuk kamu</p>
                <p>10. Pada hari perjalanan, maka kamu bisa menikmati layanan dari Tour Go</p>
                    
               </Typography>
             </AccordionDetails>
            </Accordion>
         </Col>
        </Row>
      </Container>
    </div>
  );
}