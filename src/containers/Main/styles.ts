import styled from 'styled-components'

export const MainContainer = styled.main`
    position: relative;
    z-index: 1;
    padding-bottom: 4rem;
`

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: #00000082;
    z-index: -1;
    display: none;
`
