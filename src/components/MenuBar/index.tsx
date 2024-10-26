import { useState } from 'react'
import logoVertical from '../../assets/imgs/LOGO VERTICAL.svg'
import logoHorizontal from '../../assets/imgs/LOGO HORIZONTAL.svg'
import { MenuBarContainer, Navbar, SubMenu } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/cart'
import { selectorItems } from '../../store/cart/cartSelectos'
import { RootReducer } from '../../store'
const MenuBar = () => {
    const items = useSelector((state: RootReducer) => selectorItems(state))

    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState({
        home: true,
        plans: false,
        cart: false
    })

    const handleActive = (element: string) => {
        if (element === 'home') {
            setIsActive({
                home: true,
                plans: false,
                cart: false
            })
        } else if (element === 'plans') {
            setIsActive({
                home: false,
                plans: true,
                cart: false
            })
        } else {
            dispatch(open())
            setIsActive({ home: false, plans: false, cart: true })
        }
    }

    return (
        <MenuBarContainer>
            <Navbar className="container">
                <img
                    className="logo-header horizontal"
                    srcSet={logoHorizontal}
                    alt=""
                />
                <img
                    className="logo-header vertical"
                    srcSet={logoVertical}
                    alt=""
                />
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
                                    <li className="submenuBar-item">
                                        <a
                                            className="submenuBar-item__link"
                                            href="#static"
                                        >
                                            Criativos Estáticos
                                        </a>
                                    </li>
                                    <li className="submenuBar-item">
                                        <a
                                            className="submenuBar-item__link"
                                            href="#animated"
                                        >
                                            Criativos Animados
                                        </a>
                                    </li>
                                    <li className="submenuBar-item">
                                        <a
                                            className="submenuBar-item__link"
                                            href="#sites"
                                        >
                                            Sites
                                        </a>
                                    </li>
                                </ul>
                            </SubMenu>
                        </li>
                        <li className="menu__list__item">
                            <a
                                onClick={() => handleActive('cart')}
                                className={`${isActive.cart ? 'is-active' : ''} menu__list__item__link`}
                            >
                                <i className="fa-solid fa-cart-shopping" /> -{' '}
                                {items.length}{' '}
                                {items.length <= 1 ? 'produto' : 'produtos'}
                            </a>
                        </li>
                    </ul>
                </nav>
            </Navbar>
        </MenuBarContainer>
    )
}

export default MenuBar
