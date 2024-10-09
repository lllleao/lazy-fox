import { useState } from 'react'
import logo from '../../assets/imgs/logo-header.svg'
import { HeaderContainer, Navbar, SubMenu } from './styles'
const MenuBar = () => {
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
                    <ul className="menu__list">
                        <li className="menu__list__item">
                            <a
                                onClick={() => handleActive('home')}
                                className={`${isActive.home ? 'is-active' : ''} menu__list__item__link`}
                                href="#home"
                            >
                                HOME
                            </a>
                        </li>
                        <li className="menu__list__item service">
                            <a
                                onClick={() => handleActive('plans')}
                                className={`${isActive.plans ? 'is-active' : ''} menu__list__item__link`}
                                href="#plans"
                            >
                                SERVIÇOS
                            </a>
                            <SubMenu>
                                <ul>
                                    <li>
                                        <a href="#static">
                                            Criativos Estáticos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#animated">
                                            Criativos Animados
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#sites">Sites</a>
                                    </li>
                                </ul>
                            </SubMenu>
                        </li>
                        <li className="menu__list__item">
                            <a
                                onClick={() => handleActive('contact')}
                                className={`${isActive.contact ? 'is-active' : ''} menu__list__item__link`}
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

export default MenuBar
