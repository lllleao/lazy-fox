import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    :root {
        --font-primary: 'Barlow';
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

    @keyframes float {
        0% {
            transform: translateY(0) rotate(14deg);
        } 50% {
            transform: translateY(-20px) rotate(14deg);
        } 100% {
            transform: translateY(0) rotate(14deg);
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
