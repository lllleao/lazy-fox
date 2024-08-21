import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    background-color: #222;
    padding: 4rem 0;

    .container {
        display: flex;
        justify-content: center;
        margin-top: 2rem;

        button {
            position: relative;

            font-size: 1.2rem;
            border: none;
            cursor: pointer;
            border-radius: 1rem;
            box-shadow: 0px 4px 5px 1px #000;
            overflow: hidden;
            border: 1px solid #fff;

            .up {
                display: flex;
                align-items: center;
                transform: translateY(0);
                background-color: #137f1b;
                padding: 0.5rem 1rem;
            }

            svg {
                margin-left: 0.5rem;
            }

            .down {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #b80303;
                transform: translateY(100%);
            }

            &:hover .up {
                transform: translateY(-100%);
            }

            &:hover .down {
                transform: translateY(0);
            }

            .up,
            .down {
                transition: transform 0.3s;
            }
        }
    }
`

export const SubTitle = styled.h3`
    font-family: var(--font-primary);
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, max-content));
    gap: 2rem;
    justify-content: center;
`
