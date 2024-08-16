import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fff;
    }

    .container {
        max-width: 1312px;
        width: 100%;
        margin: 0 auto;
    }

    @font-face {
        font-family: Barlow;
        src: url(src/assets/fonts/Barlow-Regular.ttf) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`
export default Global
