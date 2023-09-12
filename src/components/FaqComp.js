import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Line1 from "../assets/img/gallery/line-1.png";
import Line2 from "../assets/img/gallery/line-2.png";
import Line3 from "../assets/img/gallery/line-3.png";
import Line4 from "../assets/img/gallery/line-4.png";

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

export default function FaqComp() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
      return (
        <div className="faq">
          <Container>
            <Row>
              <Col xs={12} md={12}>
              <h2>FAQ</h2>
              </Col>
            </Row>
            <Row className="faqi row-cols-1">
              <Col >
              <Accordion className="content" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className="head"
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography><h3>1. Apa itu Tour Go ?</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail" >
                  <Typography> <Row >
                    <Col> 
                    <img 
                      src={Line1} 
                      alt="line1"/>
                    </Col> 
                    <Col xs={10}>
                  <p>Tour go adalah platform digital yang membantu kamu menemukan tour guide untuk merencanakan dan 
                  menemani kamu selama perjalanan. Di Tour Go kalian bisa menemukan tour guide untuk menemani kamu dan 
                  pembayaran dapat dilakukan dengan mudah dan aman, kalian juga bisa berdiskusi bersama dengan tour guide 
                  mengenai tempat wisata dan tempat makan yang ingin kalian kunjungi, dari keinginan kalian tour guide akan 
                  membantu membuat schedule yang efektif dan efisien, kalian akan tetap aman dan nyaman selama perjalanan 
                  karena perjalanan kamu akan di monitoring dan terhubung dengan Tour Go</p></Col>
                  <Col></Col>
                  </Row>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="content" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary className="head"
                  aria-controls="panel2bh-content"
                  id="panel2b-header"
                >
                  <Typography><h3>2. Apa keuntungan saya menggunakan Tour Go ?</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail">
                  <Typography className="tipo"><Row >
                    <Col> 
                    <img 
                      src={Line2} 
                      alt="line2"/>
                    </Col> 
                    <Col xs={10}>
                    <p>1. Pilihan tour guide yang variatif<br/>
                    2. Dapat mengatur perjalanan dengan fleksibel<br/>
                    3. Kamu bisa memesan tour guide dengan aman <br/>
                    4. Kamu bisa lihat review traveler lain terhadap tour guide<br/>
                    5. Keamanan dalam bertransaksi<br/>
                    6. Selama perjalanan kamu akan aman dan nyaman<br/>
                    7. Kamu bisa mendapatkan pengalaman traveling yang tidak biasa<br/>
                    8. Dapat melakukan review terhadap tour guide yang telah digunakan<br/>
                    9. Mendapatkan point yang dapat ditukarkan di website Tour Go<br/>
                    10. Dapat terus terhubung dengan Tour Go</p>
                     </Col>
                  <Col></Col>
                  </Row>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="content" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary className="head"
                  aria-controls="panel3b-content"
                  id="panel3b-header"
                >
                  <Typography><h3>3. Apa itu Tour Go point ?</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail">
                  <Typography><Row >
                    <Col> <img 
                      src={Line3} 
                      alt="line3"/>
                    </Col> 
                    <Col xs={10}>
                  <p>Tour Go point adalah sebuah point yang didapatkan setelah melakukan transaksi di Tour Go, point ini dapat 
                  kamu gunakan untuk menukarkan barang / promo / atau hal lainnya yang disediakan di website Tour Go</p></Col>
                  <Col></Col>
                  </Row>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="content" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary className="head"
                  aria-controls="panel4b-content"
                  id="panel4b-header"
                >
                  <Typography><h3>4. Bagaimana cara refund pesanan saya ?</h3></Typography>
                </AccordionSummary>
                <AccordionDetails className="detail">
                  <Typography> <Row >
                    <Col> 
                    <img 
                      src={Line4} 
                      alt="line4"/>
                    </Col> 
                    <Col xs={10}>
                  <p>Setelah kamu melakukan pemesanan dan kamu ingin membatalkannya maka kalian dapat :</p>
                    <p>1. Baca syarat dan ketentuan jika ingin refund pemesanan kamu <br/> 2. Klik “Batal Pemesanan” <br/>
                    3. Masukkan alasan kamu membatalkan pemesanan<br/> 4. Masukkan bukti dari alasan kamu membatalkan pemesanan<br/>
                    5. Masukkan nomor rekening tempat uang refund akan di transfer<br/> 6. Tunggu sampai pihak Tour Go mengkonfirmasi pembatalan kamu<br/>
                    7. Jika disetujui oleh pihak Tour Go, ditunggu dalam beberapa hari uang kamu akan langsung di transfer kembali ke rekening kamu</p></Col>
                  <Col></Col>
                  </Row>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
            </Row>
          </Container>
        </div>
      );
}