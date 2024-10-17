import styled from 'styled-components'
import { colors } from '../../global'

export const Title = styled.h2`
    font-family: var(--font-primary);
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    margin-bottom: 3rem;
    text-align: center;
    letter-spacing: 0.2rem;
    background-color: ${colors.mainOrange};
    padding: 1rem 0;

    span {
        display: block;
        width: 98%;
        margin: 0 auto;
    }
`
