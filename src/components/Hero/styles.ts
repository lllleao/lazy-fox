import styled from 'styled-components'

export const HeroSection = styled.section`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    height: 100%;
    gap: 8rem;
    flex: 1 1 100%;
    font-family: Barlow;
    .logo {
        max-width: 450px;
        width: 100%;
    }

    .desc {
        font-size: 2rem;
        p {
            margin-bottom: 1rem;
        }
        button {
            font-size: 1rem;
            padding: 0.5rem 1rem;
            background-color: #222;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
        }
    }
`
