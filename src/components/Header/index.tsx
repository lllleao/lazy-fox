import logo from '../../assets/logo-header.svg'
import { HeaderContainer, Navbar } from './styles'
const Header = () => {
    return (
        <HeaderContainer>
            <Navbar className="container">
                <img className="logo-header" srcSet={logo} alt="" />
                <nav className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Planos</li>
                        <li>Portifólio</li>
                    </ul>
                </nav>
                <button className="button-nav">Contate-nos</button>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
