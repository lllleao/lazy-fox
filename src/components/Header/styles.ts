import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    z-index: 2;
    .container {
        width: 90%;
    }
`
export const Navbar = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem 0;

    .logo-header {
        width: 150px;
        margin-right: auto;
    }

    .menu {
        background-color: #c66922; //#c66922
        padding: 1rem 1.9rem;
        border-radius: 1rem;
        ul {
            display: flex;
            gap: 6rem;

            li {
                a {
                    position: relative;
                    font-size: 1rem;
                    font-family: var(--font-primary);
                    text-decoration: none;
                    cursor: pointer;

                    &::after {
                        position: absolute;
                        content: '';
                        background-color: #fff;
                        width: 0;
                        height: 2px;
                        bottom: -4px;
                        left: 0;
                        transition: width 0.5s;
                    }

                    &.is-active::after {
                        width: 100%;
                    }
                }
            }
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
