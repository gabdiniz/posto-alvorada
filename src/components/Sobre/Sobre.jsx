import { Container } from "react-bootstrap";
import "./Sobre.css";
import img from "../../images/sobre/sobre3.jpg"

export function Sobre() {

  return (
    <>
    <div className="div_sobre">
      <Container className="sobre d-flex justify-content-center">
        <div className="div-sobre-img">
          <img className="img-sobre" src={img} alt="" />
        </div>
        <div className="d-flex flex-column div-sobre-text">
          <h1 className="title-sobre my-4">Super Posto Alvorada</h1>
          <p className="p-sobre">Bem-vindo, o seu destino confiável para abastecimento e atendimento excepcional em Fernandópolis. Com mais de 30 anos de experiência no setor de postos de combustível, nos orgulhamos em ser uma referência na cidade, oferecendo serviços de qualidade e uma equipe dedicada que coloca os nossos clientes em primeiro lugar.</p>
        </div>
      </Container>
      </div>
    </>
  );
};