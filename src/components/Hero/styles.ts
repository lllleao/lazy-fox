import styled from 'styled-components'

export const HeroSection = styled.section`
    width: 90%;
    padding: 17rem 0;
    display: flex;
    gap: 3rem;
    align-items: center;
    height: 100vh;

    .rocket {
        max-width: clamp(256px, 40vw, 683px);
        animation:
            floatRocket 3s infinite 2s,
            float3 2s;
    }

    @media (max-width: 425px) {
        flex-direction: column-reverse;
    }
`

export const Title = styled.h1`
    font-family: 'LemonLight';
    font-weight: normal;
    font-size: 3rem;
    text-shadow: 3px 3px 5px #000;
    padding-top: 3rem;
    animation: float1 1.5s ease-in;

    .second {
        font-family: 'LemonBold';
    }
`

export const TextHome = styled.p`
    font-family: var(--font-primary);
    font-size: 1.5rem;
    text-align: start;
    margin-top: 1rem;
    word-spacing: 0.3rem;
    line-height: 1.8rem;
    /* max-width: 581px;
    height: 144px; */
`
