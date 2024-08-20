import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    background-color: #222;
    padding: 4rem 0;
`
export const Card = styled.div`
    background-color: #222;
    box-shadow: -3px 5px 9px 2px #000;
    padding: 1rem;
    border-radius: 1rem;
    border: 2px solid #fff;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.04);
    }
`
export const SubTitle = styled.h3`
    font-family: var(--font-primary);
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
`

export const SliderProjects = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    img {
        height: 250px;
        border-radius: 1rem;
    }
`
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, max-content));
    gap: 2rem;
    justify-content: center;
`
