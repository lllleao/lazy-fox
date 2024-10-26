import styled from 'styled-components'

export const ButtonWppContainer = styled.div`
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    z-index: 6;

    &:hover .question {
        width: 300px;
        padding: 0.5rem 0.5rem;
    }

    @media (max-width: 767px) {
        bottom: 1rem;
    }
`
export const Wpp = styled.div`
    display: inline-block;
    background-color: green;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    cursor: pointer;

    .fa-whatsapp {
        font-size: 2rem;
    }
`
export const Question = styled.div`
    display: inline-block;
    width: 0;
    overflow: hidden;
    background-color: #eee;
    padding: 0;
    border-radius: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    transition:
        width 0.3s,
        height 0.3s,
        padding 0.3s;
    span {
        transition: opacity 0.3s 0.3s;
        color: #000;
        font-family: var(--font-primary);
        white-space: nowrap;
    }
`
