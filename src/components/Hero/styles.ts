import styled from 'styled-components'

export const HeroSection = styled.section`
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 20vh;
    /* justify-content: center; */
    align-items: center;

    .logo {
        max-width: 350px;
        width: 100%;
    }

    .desc {
        padding: 1rem;
        border-radius: 1rem;
        max-width: 750px;
        /* width: 100%; */
        /* height: 100%; */
        aspect-ratio: 16 / 9;
        background-color: #222;
    }
`
export const CellHome = styled.div`
    position: relative;
    top: -20%;
    left: 35%;
    .cell {
        width: 200px;
    }

    .post {
        position: absolute;
        top: 57px;
        left: 15px;
        width: 170px;
    }
`
