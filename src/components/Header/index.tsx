import { useState } from 'react'
import logo from '../../assets/imgs/logo-header.svg'
import { HeaderContainer, Navbar } from './styles'
const Header = () => {
    const [isActive, setIsActive] = useState({
        home: true,
        plans: false,
        contact: false
    })

    const handleActive = (element: string) => {
        if (element === 'home') {
            setIsActive({
                home: true,
                plans: false,
                contact: false
            })
        } else if (element === 'plans') {
            setIsActive({
                home: false,
                plans: true,
                contact: false
            })
        } else {
            setIsActive({ home: false, plans: false, contact: true })
        }
    }

    return (
        <HeaderContainer>
            <Navbar className="container">
                <img className="logo-header" srcSet={logo} alt="" />
                <nav className="menu">
                    <ul>
                        <li>
                            <a
                                onClick={() => handleActive('home')}
                                className={isActive.home ? 'is-active' : ''}
                                href="#home"
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleActive('plans')}
                                className={isActive.plans ? 'is-active' : ''}
                                href="#plans"
                            >
                                SERVIÇOS{' '}
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleActive('contact')}
                                className={isActive.contact ? 'is-active' : ''}
                                href="#contact"
                            >
                                <i className="fa-solid fa-cart-shopping" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
