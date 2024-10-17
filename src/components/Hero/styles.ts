import styled from 'styled-components'
import { colors } from '../../global'
import starsBig from '../../assets/imgs/back-star-big.svg'
import starsSmall from '../../assets/imgs/back-star-small.png'

export const HeroSection = styled.section`
    background: url(${starsBig});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 12rem 0 30rem;
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

        @media (max-width: 767px) {
            flex-direction: column-reverse;
            align-items: center;
            width: 90%;
            gap: 2rem;
            div {
                width: 100%;
            }

            .rocket {
                margin-top: -9rem;
                max-width: clamp(256px, 60vw, 510px);
                position: static;
                top: -89%;
                right: 27%;
            }
        }

        @media (max-width: 640px) {
            .rocket {
                max-width: clamp(256px, 80vw, 510px);
            }
        }

        /* @media (max-width: 924px) {
            .rocket {
                top: -98%;
                max-width: clamp(256px, 40vw, 510px);
            }
        } */

        /* @media (max-width: 615px) {
            .rocket {
                top: -68%;
                right: 20%;
            }
        }
        @media (max-width: 384px) {
            .rocket {
                right: 10%;
            }
        } */
    }

    .rocket {
        position: absolute;
        right: -2rem;
        top: -5rem;
        max-width: clamp(256px, 35vw, 510px);
        animation:
            floatRocket 3s infinite 2s,
            float3 2s;
    }

    @media (max-width: 768px) {
        padding: 13rem 0 9rem;
    }

    @media (max-width: 425px) {
        background: url(${starsSmall});
    }
`

export const Title = styled.h1`
    font-family: 'LemonLight';
    font-weight: normal;
    font-size: clamp(1rem, 7vw, 2.2rem);
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
    font-size: clamp(1rem, 4vw, 1.2rem);
    text-align: start;
    margin-top: 1rem;
    word-spacing: 0.3rem;
    line-height: 1.8rem;
    opacity: 0;
    text-align: justify;
    animation: fadeOut 1s 2.2s linear forwards;
`
