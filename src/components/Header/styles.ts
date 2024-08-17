import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
`
export const Navbar = styled.div`
    display: flex;
    /* justify-content: space-between; */
    padding: 1.5rem 0;
    width: 98%;

    .logo-header {
        width: 150px;
        margin-right: auto;
    }

    .menu {
        ul {
            display: flex;
            align-items: center;
            gap: 5rem;
            font-size: 1.3rem;
            font-family: var(--font-primary);

            li {
                cursor: pointer;
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

        &:hover {
            background-color: #d9762a;
        }
    }
`
