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
                    <p>Todos os direitos resrvados - Lazy Fox &copy;</p>
                    <ul className="social-links">
                        <li>
                            <i className="fa-brands fa-instagram" />
                        </li>
                        <li>
                            <i className="fa-brands fa-facebook" />
                        </li>
                    </ul>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer
