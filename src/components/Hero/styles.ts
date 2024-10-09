import styled from 'styled-components'
import { colors } from '../../global'

export const HeroSection = styled.section`
    width: 90%;
    padding: 17rem 0;
    display: flex;
    gap: 4rem;
    align-items: center;
    height: 100vh;

    .rocket {
        max-width: clamp(256px, 40vw, 650px);
        animation:
            floatRocket 3s infinite 2s,
            float3 2s;
    }

    @media (max-width: 1023px) {
        flex-direction: column-reverse;
        padding: 7rem 0 0 0;
        height: auto;
        gap: 3rem;
    }

    @media (max-width: 992px) {
        padding: 1rem 0;
    }
`

export const Title = styled.h1`
    font-family: 'LemonLight';
    font-weight: normal;
    font-size: clamp(1rem, 10vw, 3rem);
    text-shadow: 3px 3px 5px #000;
    padding-top: 3rem;
    text-align: center;
    animation: float1 1.5s ease-in;

    .second {
        font-family: 'LemonBold';
        color: ${colors.mainOrange};
        text-shadow: 0 0 8px #ff7f00;
    }
`

export const TextHome = styled.p`
    font-family: var(--font-primary);
    font-size: clamp(1rem, 5vw, 1.5rem);
    text-align: start;
    margin-top: 1rem;
    word-spacing: 0.3rem;
    line-height: 1.8rem;
    opacity: 0;
    text-align: justify;
    animation: fadeOut 1s 2.2s linear forwards;
`
