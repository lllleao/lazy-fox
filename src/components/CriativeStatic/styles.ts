import styled from 'styled-components'
import { CardContainer } from '../Card/styles'

export const CardsStaticContainer = styled.div`
    display: flex;
    gap: 4rem;
    height: 598px;
    width: 634px;
    margin-left: 1rem;
    overflow: hidden;

    ${CardContainer} {
        height: 578px;
        width: 634px;
    }
`
