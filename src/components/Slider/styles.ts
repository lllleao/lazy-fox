import styled from 'styled-components'

export const SliderContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: 1%;
    left: 8px;

    video {
        width: 187px;
        height: 397px;
        object-fit: cover;
        transition: transform 1s;
    }
`
