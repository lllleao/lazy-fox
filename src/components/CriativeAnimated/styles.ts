import styled from 'styled-components'
import { CardContainer } from '../Card/styles'

export const CardsAnimated = styled.div`
    height: 598px;
    overflow: hidden;

    ${CardContainer} {
        display: block;
        margin: 0 7rem 2rem 0;
        height: 578px;

        video {
            height: 100%;
            width: 100%;
            border-radius: 1rem;
        }
    }
`
