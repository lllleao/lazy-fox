import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    img {
        height: 250px;
        border-radius: 1rem;
    }
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
