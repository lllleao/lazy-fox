import { FooterContainer } from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container">
                <ul className="options">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#plans">Serviços</a>
                    </li>
                    <li>
                        <a href="#contact">Carrinho</a>
                    </li>
                </ul>
                <div className="copy">
                    <p>Todos os direitos reservados - Lazy Fox &copy;</p>
                    <ul className="social-links">
                        <li>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/designlazyfox"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/lazyfoxdesignlfd"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer
