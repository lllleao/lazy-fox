import styled from 'styled-components'
import { colors } from '../../global'

export const MenuHambContainer = styled.nav`
    position: fixed;
    z-index: 3;
    top: 4.3rem;
    left: -100%; // 0.5rem
    background-color: ${colors.mainOrange};
    height: max-content;
    padding: 2rem 0;
    transition: 0.3s linear;

    .menu-hamburguer__list {
        &__item {
            &:nth-child(2) {
                margin: 1rem 0;
            }

            &__link {
                display: block;
                width: 100%;
                padding: 0.5rem 0.8rem;
                text-decoration: none;
                font-family: var(--font-primary);
                font-size: 1.1rem;

                .arrow {
                    margin-left: 1rem;
                }
            }
        }
    }

    &.menu--is-active {
        left: 0.5rem;
    }
    @media (min-width: 993px) {
        display: none;
    }
`
export const Hamburguer = styled.div`
    position: fixed;
    z-index: 3;
    top: 2rem;
    left: 1rem;
    .hamburguer-item {
        display: block;
        background-color: ${colors.mainOrange};
        width: 30px;
        height: 5px;
        border-radius: 50px;
        margin-bottom: 0.5rem;
        transition: 0.3s linear;
    }

    &.drop--is-active {
        .hamburguer-item {
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(1) {
                transform: translate(-1px, 10px) rotate(50deg);
            }
            &:nth-child(3) {
                transform: translate(-1px, -16px) rotate(-47deg);
            }
        }
    }
    @media (min-width: 993px) {
        display: none;
    }
`
export const SubMenu = styled.nav`
    margin-top: 0;
    height: 0;
    overflow: hidden;
    transition:
        height 0.3s,
        margin-top 0.3s;
    .sub-menu-list {
        &__item {
            margin-bottom: 1rem;

            &__link {
                text-decoration: none;
            }
        }
    }
    &.sub-menu--is-active {
        margin-top: 1rem;
        height: 114px;
    }
`
