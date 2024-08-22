import styled from 'styled-components'

type Props = {
    $back?: boolean
}

export const CardContainer = styled.div<Props>`
    display: flex;
    gap: 1rem;
    justify-content: center;
    img {
        height: 250px;
        border-radius: 1rem;
    }

    video {
        height: 322px;
        border-radius: 1rem;
    }

    background-color: ${({ $back }) => ($back ? '#222' : '#000')};
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
