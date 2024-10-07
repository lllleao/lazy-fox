import { FooterContainer } from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container">
                <ul className="options">
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Carrinho</li>
                </ul>
                <div>
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
