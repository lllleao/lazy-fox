import { createGlobalStyle } from 'styled-components'
import LemonLight from './assets/fonts/lemonLight.otf'
import LemonBold from './assets/fonts/LEMONMILK-Bold.otf'

const Global = createGlobalStyle`
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

    .container {
        max-width: 1312px;
        width: 100%;
        margin: 0 auto;
    }

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
`
export default Global
