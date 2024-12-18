import styled from 'styled-components'

export const HeroSection = styled.section`
    padding: 16rem 0 13rem;
    .container {
        position: relative;
        width: 70%;
        display: flex;
        gap: 4rem;
        justify-content: space-between;

        div {
            width: 50%;
        }

        @media (max-width: 1100px) {
            flex-direction: column-reverse;
            align-items: center;
            gap: 2rem;

            div {
                width: 100%;
            }

            .rocket {
                max-width: clamp(256px, 70vw, 510px);
                margin-top: -9rem;
                position: static;
                top: -89%;
                right: 27%;
            }
        }

        @media (max-width: 767px) {
            width: 90%;

            .rocket {
                max-width: clamp(256px, 60vw, 510px);
            }
        }

        @media (max-width: 640px) {
            .rocket {
                max-width: clamp(256px, 80vw, 510px);
            }
        }
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

    @media (min-width: 1200px) and (min-height: 631px) {
        height: 100vh;
    }

    @media (max-width: 768px) {
        padding: 15rem 0 9rem;
    }
`

export const Title = styled.h1`
    font-family: 'LemonLight';
    font-weight: normal;
    font-size: clamp(1rem, 7vw, 2.2rem);
    text-shadow: 3px 3px 5px #000;
    animation: float1 1.5s ease-in;
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
