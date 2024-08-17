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
    width: 100%;
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
    width: 200px;
    height: 104%;
    overflow: hidden;
    border-radius: 2.2rem;
    .cell {
        position: absolute;
        inset: 0;
        height: 100%;
        overflow: hidden;
        z-index: 3;
    }

    &:hover video {
        transform: translateY(-104%);
    }
`
