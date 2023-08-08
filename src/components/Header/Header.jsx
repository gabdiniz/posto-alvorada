import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo6 from "../../images/logo6.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll'

export function Header() {

  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <div className="d-flex align-items-center gap-3">
            <img className="logo-navbar" src={logo6} alt="Logo do posto alvorada" />
          </div>
          <Nav className="gap-5 align-items-bottom">
            <div className="d-flex gap-2">
              <Link className="item-navbar" to="sobre" spy={true} smooth={true} offset={-100} duration={100} >Sobre Nós</Link>
              <Link className="item-navbar" to="servicos" spy={true} smooth={true} offset={-100} duration={500}>Serviços</Link>
              <Link className="item-navbar" to="conveniencia" spy={true} smooth={true} offset={-100} duration={500}>Conveniência</Link>
              <Link className="item-navbar" to="marmitaria" spy={true} smooth={true} offset={-100} duration={500}>Marmitaria</Link>
              <Link className="item-navbar" to="div-maior-como-chegar" spy={true} smooth={true} offset={-15} duration={200}>Como Chegar</Link>
            </div>

            <div className="d-flex">
              <Nav.Link href="https://api.whatsapp.com/send?phone=5517997248775&text=Ol%C3%A1%2C+gostaria+de+pedir+uma+marmita" target="_blank" rel="noreferrer" ><FaWhatsapp className="icon-navbar" /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/superpostoalvorada/" target="_blank" rel="noreferrer" ><FaInstagram className="icon-navbar" /></Nav.Link>
            </div>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}