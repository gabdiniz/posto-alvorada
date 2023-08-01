import { FaHome, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import { Link } from 'react-scroll'
import logo6 from "../../images/logo6.png";

export function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}> <FaHome className="icon-navbar" /> Home</Link>

                    <a className='instagram' href="https://www.instagram.com/superpostoalvorada/" target="_blank" rel="noreferrer" ><FaInstagram className="icon-navbar" /> Instagram </a>

                    <a className='whatsapp' href="https://api.whatsapp.com/send?phone=5517997248775&text=Ol%C3%A1%2C+gostaria+de+pedir+uma+marmita" target="_blank" rel="noreferrer"> <FaWhatsapp className="icon-navbar" /> Whatsapp</a>
                </ul>
                <div className="img-logo-footer">
                    <img className="img-footer" src={logo6} alt="Logo do posto alvorada" />
                </div>
                <div className='bottom'>
                    <span className='line'></span>
                    <p> SUPER POSTO ALVORADA LTDA - TODOS OS DIREITOS RESERVADOS ©2023</p>
                </div>
            </div>
        </div>
    )
};