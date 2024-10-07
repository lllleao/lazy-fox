import styled from 'styled-components'

type Props = {
    $back?: boolean
}

export const CardContainer = styled.div<Props>`
    background-color: transparent;
    padding: 1rem;
    border-radius: 1rem;
    border: 2px solid #fff;
    transition: transform 0.3s;
    img {
        height: 100%;
        border-radius: 1rem;
    }
`
