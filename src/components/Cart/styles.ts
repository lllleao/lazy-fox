import styled from 'styled-components'

export const CartContainer = styled.aside`
    display: none;
    position: fixed;
    z-index: 3;
    background-color: #222;
    right: 0;
    top: 0;
    height: 100vh;
    padding: 1rem 0.5rem;
    width: 300px;

    .close {
        margin-bottom: 1rem;

        .fa-chevron-right {
            cursor: pointer;
            padding: 0.5rem;
            font-size: 1.5rem;
        }
    }

    .fa-image,
    .fa-film {
        padding: 8px;
        border: 2px solid #fff;
        border-radius: 1rem;
        font-size: 3.5rem;
    }

    .total-price {
        text-align: center;
        span {
            font-family: var(--font-primary);
            font-size: 1.4rem;
        }

        a {
            display: block;
            text-decoration: none;
            cursor: pointer;
            margin-top: 1rem;
            background-color: #138813;
            padding: 0.5rem 1rem;
            border: none;
            border: 2px solid #fff;
            font-size: 1.2rem;
            font-family: var(--font-primary);
            transition: background-color 0.3s;

            &:hover {
                background-color: #19a319;
            }
        }
    }

    &.cartClosed {
        display: block;
    }

    @media (max-width: 425px) {
        width: 65%;

        .fa-image,
        .fa-film {
            text-align: center;
            font-size: 2.5rem;
        }

        .close {
            .fa-chevron-right {
                font-size: 1rem;
            }
        }

        .total-price {
            span {
                font-size: 1.1rem;
            }

            button {
                font-size: 1rem;
            }
        }
    }
`

export const OverLay = styled.div`
    display: none;
    background-color: #0000008f;
    position: fixed;
    inset: 0;
    z-index: 3;

    &.overlay {
        display: block;
    }
`
