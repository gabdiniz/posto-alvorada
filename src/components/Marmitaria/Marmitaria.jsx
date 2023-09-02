import { Nav } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import img from '../../images/marmitaria/restaurante-refeicao.jpg';
import './Marmitaria.css';

export function Marmitaria() {
  return (
    <section className="container-marmitaria">
      <div className="ms-3 mt-5 pt-5 me-2 text-center">
        <h2 className="fs-1 mb-5">Marmitaria Alvorada</h2>
        <p className="fs-4 text-center">
          Explore uma variedade de sabores frescos e deliciosos a cada dia da
          semana com nossas marmitas especiais! Oferecemos pratos únicos
          diariamente, garantindo que cada refeição seja uma experiência
          incrível. <br /> Disponíveis nos tamanho P e M.
        </p>
        <div className="link">
          <h3>Peça sua marmita no nosso Whatsapp</h3>
          <Nav.Link
            className="link-whatsapp"
            href="https://api.whatsapp.com/send?phone=5517997248775&text=Ol%C3%A1%2C+gostaria+de+pedir+uma+marmita"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="link-whatsapp" />
          </Nav.Link>
        </div>
      </div>
      <div className="imgs-marmita ms-5">
        <img
          src={img}
          alt="Foto do prato com a refeição"
          style={{ width: '100%', height: 'auto' }}
        />
        <img
          src={img}
          alt="Foto do prato com a refeição"
          style={{ width: '100%', height: 'auto' }}
        />
        <img
          src={img}
          alt="Foto do prato com a refeição"
          style={{ width: '100%', height: 'auto' }}
        />
        <img
          src={img}
          alt="Foto do prato com a refeição"
          style={{ width: '100%', height: 'auto' }}
        />
        <img
          src={img}
          alt="Foto do prato com a refeição"
          style={{ width: '100%', height: 'auto' }}
        />
        <img
          src={img}
          alt="Foto do prato com a refeição"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
}
