import styled, { createGlobalStyle } from 'styled-components'
import LemonLight from './assets/fonts/lemonLight.otf'
import LemonBold from './assets/fonts/LEMONMILK-Bold.otf'
import stars from './assets/BG2.svg'

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
        background: url(${stars}) no-repeat;
        background-size: cover;
    }

    .container {
        max-width: 1312px;
        width: 100%;
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
`
// Criativos
export const ProjectsContainer = styled.div`
    margin-bottom: 1rem;

    &.container {
        width: 90%;
        margin-bottom: 1.5rem;
    }

    .product-info {
        display: flex;
        gap: 2rem;
        justify-content: center;
    }
`

export const SubTitleCriatives = styled.h3<{ $type?: boolean }>`
    background-color: ${({ $type }) => ($type ? '#d46018' : '#172b84')};
    border-radius: 1rem;
    font-family: var(--font-primary);
    text-align: center;
    margin-bottom: 2rem;
    padding: 0.5rem 0;
    font-size: 1.5rem;

    img {
        margin-left: 1rem;
        width: 22px;
    }
`

export const Button = styled.div`
    display: inline-block;
    justify-content: center;

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
                /* color: #000; */
                font-size: 1.5rem;
                padding: 0.2rem;
                border: none;
                border-radius: 0.2rem;
                background-color: #d46018;

                option {
                    /* background-color: #fff; */
                }
            }
        }

        p {
            text-align: justify;
            font-size: 1.5rem;
            line-height: 1.8rem;
            margin: 1.5rem 0;
        }
    }
`
export default Global
