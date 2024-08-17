import styled from 'styled-components'

export const HeroSection = styled.section`
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 20vh;
    /* justify-content: center; */
    align-items: center;

    .logo {
        max-width: 350px;
        width: 100%;
    }
`
export const ShowHome = styled.div`
    position: relative;
    padding: 1rem;
    border-radius: 1rem;
    max-width: 750px;
    aspect-ratio: 16 / 9;
    background-color: #222;
    z-index: 1;

    .fox {
        position: absolute;
        right: 6%;
        top: 11%;
        width: 60px;
        animation: float 3s ease-in-out infinite;
    }

    .rocket {
        position: absolute;
        top: -17%;
        left: 41%;
        width: 298px;
        z-index: -1;
        animation: floatRocket 2s ease-in-out infinite;
    }
`
export const CellHome = styled.div`
    position: relative;
    top: -20%;
    left: 35%;
    width: max-content;
    .cell {
        width: 200px;
    }

    .post {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 179px;
        height: 387px;
        z-index: -1;
        border-radius: 1rem;
        object-fit: cover;
        border-radius: 1rem;
    }
`
