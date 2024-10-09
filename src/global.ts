import styled, { createGlobalStyle } from 'styled-components'
import LemonLight from './assets/fonts/lemonLight.otf'
import LemonBold from './assets/fonts/LEMONMILK-Bold.otf'
import starsBigger from './assets/imgs/back-novo-esp-menor.svg'

export const colors = {
    mainOrange: '#ff7f00'
}

const Global = createGlobalStyle`
// Fontes e variáveis
    :root {
        --font-primary: 'Barlow';
    }

    @font-face {
        font-family: 'LemonLight';
        src: url(${LemonLight}) format('opentype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'LemonBold';
        src: url(${LemonBold}) format('opentype');
        font-weight: bold;
    }
// Globais
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fff;
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        border: 2px solid #030513;
        background: url(${starsBigger}) no-repeat;
        background-size: cover;
        background-attachment: fixed;

        @media (max-width: 767px) {
            background-attachment: scroll;
            background-size: cover;
        }
    }

    .container {
        max-width: 1312px;
        width: 90%;
        margin: 0 auto;
    }

// Animação
    @keyframes float1 {
        0% {
            opacity: 0;
            transform: translateX(-200px);
        } 100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes float2 {
        0% {
            opacity: 0;
            transform: translateY(200px);
        } 100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes float3 {
        0% {
            opacity: 0;
            transform: translateX(-200px);
        } 100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes floatRocket {
        0% {
            transform: translateY(0);
        } 50% {
            transform: translateY(-20px);
        } 100% {
            transform: translateY(0);
        }
    }

    @keyframes fly-1 {
        from {
        transform: translateY(0.1em);
        }

        to {
            transform: translateY(-0.1em);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`
// Criativos
export const ProjectsContainer = styled.div`
    &.container {
        padding-top: 95.5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin-bottom: 8rem;
    }

    .product-info {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        @media (max-width: 901px) {
            flex-direction: column;
        }
    }
`

export const SubTitleCriatives = styled.h3`
    font-family: var(--font-primary);
    text-align: center;
    margin-bottom: 4rem;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    /* width: 30%; */
    border: 2px solid #ff7f00;
    border-image: linear-gradient(
            144deg,
            transparent,
            transparent,
            #ff7f00,
            #ff7f00,
            #ff7f00,
            #ff7f00,
            #ff7f00,
            #ff7f00,
            #ff7f00,
            transparent,
            transparent
        )
        1;

    img {
        margin-left: 1rem;
        width: 22px;
    }
`

export const Button = styled.div`
    display: inline-block;

    button {
        position: relative;

        font-size: 1.2rem;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        box-shadow: 0px 4px 5px 1px #000;
        overflow: hidden;
        border: 2px solid #fff;
        width: 235px;

        .up {
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(0);
            background-color: #137f1b;
            padding: 0.5rem 1rem;
        }

        svg {
            margin-left: 0.5rem;
        }

        .down {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #b80303;
            transform: translateY(100%);
            /* padding: 0 0.5rem; */
        }

        &:hover .up {
            transform: translateY(-100%);
        }

        &:hover .down {
            transform: translateY(0);
        }

        .up,
        .down {
            transition: transform 0.3s;
        }
    }
`

export const ProductInfo = styled.div`
    width: 40%;
    .description {
        font-family: var(--font-primary);

        .price {
            display: flex;
            align-items: center;
            gap: 3rem;
            span {
                font-weight: bold;
                font-size: 3rem;
                text-shadow: 3px 3px 5px #000;
            }

            .price-values {
                font-size: 1.5rem;
                padding: 0.2rem;
                border: none;
                border-radius: 0.2rem;
                background-color: ${colors.mainOrange};
            }

            @media (max-width: 402px) {
                flex-direction: column;
                gap: 1rem;
            }
        }

        p {
            text-align: justify;
            font-size: 1.5rem;
            line-height: 1.8rem;
            margin: 1.5rem 0;
        }
    }

    @media (max-width: 901px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
`
export default Global
