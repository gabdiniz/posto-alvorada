import { Container, Nav, Navbar } from "react-bootstrap";
import "./Home.css";
import capa from "../../images/capa.jpg";
import logo6 from "../../images/logo6.png";
import { FaWhatsapp, FaInstagram, FaInstagramSquare } from "react-icons/fa";

export function Home() {

  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <div className="d-flex align-items-center gap-3">
            <img className="logo-navbar" src={logo6} alt="Logo do posto alvorada" />
            {/* <span className="title-navbar">ALVORADA</span> */}
          </div>
          <Nav className="gap-5 align-items-bottom">
            <div className="d-flex gap-2">
              <Nav.Link className="item-navbar">Serviços</Nav.Link>
              <Nav.Link className="item-navbar">Conveniência</Nav.Link>
              <Nav.Link className="item-navbar">Marmitaria</Nav.Link>
              <Nav.Link className="item-navbar">Contato</Nav.Link>
              <Nav.Link className="item-navbar">Como chegar</Nav.Link>
              <Nav.Link className="item-navbar">Sobre nós</Nav.Link>
            </div>

            <div className="d-flex">
              <Nav.Link ><FaWhatsapp className="icon-navbar" /></Nav.Link>
              <Nav.Link ><FaInstagram className="icon-navbar" /></Nav.Link>
            </div>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
};