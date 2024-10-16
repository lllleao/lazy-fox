import styled from 'styled-components'
import { colors } from '../../global'

export const MenuBarContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 2;
    margin-right: auto;
    backdrop-filter: blur(10px);
    .container {
        width: 90%;
    }
    @media (max-width: 992px) {
        backdrop-filter: blur(10px);
    }
`

export const SubMenu = styled.nav`
    position: absolute;
    top: 2rem;
    left: -3rem;
    height: 0;
    overflow: hidden;
    transition: height 0.3s;
    ul {
        .submenuBar-item {
            &__link {
                text-decoration: none;
                font-family: var(--font-primary);
                font-weight: bold;
                display: block;
                padding: 0.5rem 1rem;
                background-color: ${colors.mainOrange};
                width: 180px;
                font-size: 1rem;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #cf6c0a;
                }
            }
        }
    }
`

export const Navbar = styled.div`
    display: flex;
    align-items: center;
    padding: 1.2rem 0;

    .logo-header {
        width: 150px;
        margin-right: auto;
        @media (max-width: 992px) {
            margin: 0 auto;
        }
    }

    .menu {
        background-color: ${colors.mainOrange};
        padding: 1rem 1rem;
        border-radius: 1rem;
        &__list {
            display: flex;
            gap: 6rem;

            &__item {
                transition: transform 0.3s;
                &__link {
                    position: relative;
                    font-size: 0.9rem;
                    font-family: var(--font-primary);
                    font-weight: bold;
                    text-decoration: none;
                    cursor: pointer;
                    padding: 0.4rem;

                    &::after {
                        position: absolute;
                        content: '';
                        background-color: #fff;
                        width: 0;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                        transition: width 0.5s;
                    }

                    i {
                        font-size: 1.2rem;
                    }

                    &.is-active::after {
                        width: 100%;
                    }
                }

                &:nth-child(1):hover {
                    transform: scale(1.1) translateY(-2px);
                }

                &:nth-child(3):hover {
                    transform: scale(1.1) translateY(-2px);
                }

                &:nth-child(2):hover ${SubMenu} {
                    height: 105px;
                }
            }
            .service {
                position: relative;
            }
        }
        @media (max-width: 992px) {
            display: none;
        }
    }

    .button-nav {
        background-color: #c66922;
        border: none;
        padding: 0.5rem 1rem;
        height: max-content;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: background-color 0.3s;
        margin-left: auto;
        text-transform: uppercase;

        &:hover {
            background-color: #d9762a;
        }
    }
`
