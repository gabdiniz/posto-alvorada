import { Container, Card } from 'react-bootstrap';
import './Sobre.css';
import img from '../../images/sobre/logo6 (1).png';
import img2 from '../../images/sobre/sobre3.png';
import img1 from '../../images/sobre/capa.png';
import img3 from '../../images/sobre/gasolina.png';

export function Sobre() {
  return (
    <>
      <section className="container-sobre sobre">
        <div className="d-flex justify-content-around align-items-center flex-wrap mb-5">
          <img className="logo-sobre" src={img} alt="" />
          <div>
            <h2 class="fw-bold fs-2">Quem somos</h2>
            <p class="fs-4">
              Bem-vindo, o seu destino confiável para abastecimento e <br />
              atendimento excepcional em Fernandópolis.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around flex-wrap gap-1">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title class="fs-3 fw-bold text-center mt-1 mb-3">
                Eficiência de décadas
              </Card.Title>
              <Card.Text class="fs-5 p-2 ms-2">
                Com décadas de história, os orgulhamos em ser uma referência na
                cidade, oferecendo o melhor produto ao nosso consumidor, que
                pode sempre confiar no Posto Alvorada.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title class="fs-3 fw-bold text-center mt-1 mb-3">
                Excelência em Combustíveis
              </Card.Title>
              <Card.Text class="fs-5 p-2 ms-2 ">
                Abastecer com confiança é primordial, e é por isso que nos
                esforçamos incansavelmente para fornecer a mais alta qualidade
                de gasolina para o seu veículo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title class="fs-3 fw-bold text-center mt-1 mb-3">
                Qualidade de atendimento
              </Card.Title>
              <Card.Text class="fs-5 p-2 ms-2">
                Nos dedicamos a proporcionar serviços de qualidade, respaldados
                por uma equipe altamente comprometida que coloca nossos clientes
                em primeiro lugar.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
