import styled from 'styled-components'
import stars from '../../assets/BG.png'

export const MainContainer = styled.main`
    background: url(${stars}) no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
`

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: #00000054;
    z-index: -1;
`
