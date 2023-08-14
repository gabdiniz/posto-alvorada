import { Carousel, Container } from "react-bootstrap";
import "./Servicos.css";
import img from "../../images/sobre/sobre3.jpg"

export function Servicos() {

    return (

        <div className="div_servicos">
            <Container className="servicos d-flex justify-content-center">
                <div className="d-flex flex-column div-servicos-text">
                    <h1 className="title-servicos mb-3">Serviços</h1>
                    <p className="p-servicos">
                        No Super Posto Alvorada, acreditamos que a qualidade é essencial para garantir a eficiência e a durabilidade dos veículos dos nossos clientes. O segredo do nosso sucesso está no atendimento caloroso e personalizado que oferecemos a cada cliente que entra no nosso posto. Nossa equipe é formada por profissionais experientes, treinados para proporcionar um serviço ágil, cortês e atencioso, estando sempre prontos para atender às necessidades específicas de cada pessoa que visita o nosso posto.
                    </p>
                </div>

                <div className="div-carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img className="img-combustivel" src={img} alt="" text="Combustível" />
                            <Carousel.Caption>
                                <h3>Combustíveis de Qualidade</h3>
                                <p> 
                                    Oferecemos combustíveis da mais alta qualidade, assegurando um desempenho excepcional para os veículos e a satisfação dos nossos clientes.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img-combustivel" src={img} alt="" text="Combustível" />
                            <Carousel.Caption>
                                <h3>Troca de Óleo</h3>
                                <p>
                                    Trabalhamos com as melhores marcas, deixe-nos cuidar do coração do seu veículo com precisão e qualidade.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img-combustivel" src={img} alt="" text="Combustível" />
                            <Carousel.Caption>
                                <h3>Limpeza e Higienização</h3>
                                <p>
                                    Nossos profissionais dedicados garantem uma limpeza completa, desde o exterior reluzente até os detalhes internos.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
            </Container>
        </div>

    )
}