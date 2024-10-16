import styled from 'styled-components'
import { colors } from '../../global'
import starsBig from '../../assets/imgs/back-star-big.svg'
import starsSmall from '../../assets/imgs/back-star-small.png'

export const HeroSection = styled.section`
    background: url(${starsBig});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 16rem 0;
    .container {
        position: relative;
        width: 70%;
        display: flex;
        gap: 4rem;
        justify-content: space-between;
        padding: 2rem;
        border: 2px solid #fff;
        border-radius: 2rem 1rem;

        div {
            width: 50%;
        }

        @media (max-width: 1023px) {
            flex-direction: column-reverse;
            padding: 7rem 0 0 0;
            height: auto;
            gap: 3rem;
        }

        @media (max-width: 992px) {
            padding: 6rem 0;
        }
    }

    .rocket {
        position: absolute;
        right: -2rem;
        top: -5rem;
        max-width: clamp(256px, 40vw, 510px);
        animation:
            floatRocket 3s infinite 2s,
            float3 2s;
    }

    @media (max-width: 767px) {
        background: url(${starsSmall});

        .container {
            width: 100%;
            div {
                width: 100%;
            }
        }

        .rocket {
            top: 0;
        }
    }
`

export const Title = styled.h1`
    font-family: 'LemonLight';
    font-weight: normal;
    font-size: clamp(1rem, 10vw, 2.2rem);
    text-shadow: 3px 3px 5px #000;
    animation: float1 1.5s ease-in;

    .second {
        font-family: 'LemonBold';
        color: ${colors.mainOrange};
        text-shadow: 0 0 8px #ff7f00;
    }
`

export const TextHome = styled.p`
    font-family: var(--font-primary);
    font-size: clamp(1rem, 5vw, 1.2rem);
    text-align: start;
    margin-top: 1rem;
    word-spacing: 0.3rem;
    line-height: 1.8rem;
    opacity: 0;
    text-align: justify;
    animation: fadeOut 1s 2.2s linear forwards;
`
