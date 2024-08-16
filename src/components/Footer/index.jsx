import "./style.css";
import Tel from "../../assets/footer/img/tell.svg";
import Email from "../../assets/footer/img/email.svg";
import Local from "../../assets/footer/img/localization.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contatos">
                <h4>Contato</h4>
                <ul>
                    <li><span><img src={Tel} alt="Icone Telefone" /></span><a href="https://wa.me/5511991502747" target="_blank">(11) 99150-2747</a></li>
                    <li><span><img src={Email} alt="Icone Email" /></span><a href="mailto:pedrinhoffiel@gmail.com" target="_blank">pedrinhoffiel@gmail.com</a></li>
                    <li><span><img src={Local} alt="Icone Localização" /></span>São Paulo, São Paulo - Brasil</li>
                </ul>
            </div>
            <div className="footer-credits">
                <p>© Desenvolvido por Pedro de Freitas Fiel</p>
            </div>
        </footer>
    );
}

export default Footer;