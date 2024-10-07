import styled from 'styled-components'

export const HeaderContainer = styled.header`
    /* position: fixed; */
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
        background-color: #ff7f00; //#c66922
        padding: 0.9rem 1.3rem;
        border-radius: 1rem;
        ul {
            display: flex;
            gap: 6rem;

            li {
                transition: transform 0.3s;
                a {
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
                &:hover {
                    transform: scale(1.1) translateY(-2px);
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
