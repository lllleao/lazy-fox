import { useState } from 'react'
import { Hamburguer, MenuHambContainer, SubMenu } from './styles'
import { useDispatch } from 'react-redux'
import { open } from '../../store/cart'

const MenuHamb = () => {
    const [hamburguerIsActive, setHamburguer] = useState(false)
    const [subMenuIsActive, setSubMenuIsActive] = useState(false)
    const dispatch = useDispatch()

    const handleCart = () => {
        setHamburguer(false)
        dispatch(open())
    }

    return (
        <>
            <MenuHambContainer
                className={`${hamburguerIsActive ? 'menu--is-active' : ''}`}
            >
                <ul className="menu-hamburguer__list">
                    <li className="menu-hamburguer__list__item">
                        <a
                            className="menu-hamburguer__list__item__link"
                            href="#home"
                        >
                            HOME
                        </a>
                    </li>
                    <li className="menu-hamburguer__list__item">
                        <div
                            onClick={() => setSubMenuIsActive(!subMenuIsActive)}
                            className="menu-hamburguer__list__item__link"
                        >
                            SERVIÇOS
                            <i className="fa-solid fa-chevron-down arrow" />
                            <SubMenu
                                className={
                                    subMenuIsActive ? 'sub-menu--is-active' : ''
                                }
                            >
                                <ul className="sub-menu-list">
                                    <li className="sub-menu-list__item">
                                        <a
                                            className="sub-menu-list__item__link"
                                            href="#static"
                                        >
                                            CRIATIVOS ESTÁTICOS
                                        </a>
                                    </li>
                                    <li className="sub-menu-list__item">
                                        <a
                                            className="sub-menu-list__item__link"
                                            href="#animated"
                                        >
                                            CRIATIVOS ANIMADOS
                                        </a>
                                    </li>
                                    <li className="sub-menu-list__item">
                                        <a
                                            className="sub-menu-list__item__link"
                                            href="#sites"
                                        >
                                            SITES
                                        </a>
                                    </li>
                                </ul>
                            </SubMenu>
                        </div>
                    </li>
                    <li className="menu-hamburguer__list__item">
                        <a
                            onClick={handleCart}
                            className="menu-hamburguer__list__item__link"
                        >
                            <i className="fa-solid fa-cart-shopping" />
                        </a>
                    </li>
                </ul>
            </MenuHambContainer>
            <Hamburguer
                onClick={() => setHamburguer(!hamburguerIsActive)}
                className={hamburguerIsActive ? 'drop--is-active' : ''}
            >
                <span className={`hamburguer-item`} />
                <span className={`hamburguer-item`} />
                <span className={`hamburguer-item`} />
            </Hamburguer>
        </>
    )
}

export default MenuHamb
