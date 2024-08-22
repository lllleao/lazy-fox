import logo from '../../assets/imgs/logo-header.svg'
import { HeaderContainer, Navbar } from './styles'
const Header = () => {
    return (
        <HeaderContainer>
            <Navbar className="container">
                <img className="logo-header" srcSet={logo} alt="" />
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#home">HOME</a>
                        </li>
                        <li>
                            <a href="#plans">SERVIÇOS</a>
                        </li>
                        <li>
                            <a href="#contact">FALE CONOSCO</a>
                        </li>
                    </ul>
                </nav>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
