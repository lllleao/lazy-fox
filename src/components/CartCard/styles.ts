import styled from 'styled-components'
import { OptionsContainer } from '../Options/styles'

export const CartCardContainer = styled.div`
    border: 2px solid #fff;
    width: 100%;
    padding: 1rem;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-family: var(--font-primary);

    .close {
        i {
            cursor: pointer;
            padding: 0.5rem;
        }
    }

    .delete {
        display: flex;
        justify-content: end;

        .fa-trash {
            padding: 0.5rem;
            cursor: pointer;
        }
    }

    .product-info-cart {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    span {
        display: inline-block;
    }

    ${OptionsContainer} {
        padding: 0.1rem;
        font-size: 1.2rem;
    }

    @media (max-width: 425px) {
        text-align: center;
        h3 {
            font-size: 1rem;
        }
        .delete {
            .fa-trash {
                padding: 0.5rem;
                cursor: pointer;
            }
        }

        .product-info-cart {
            display: block;
        }

        span {
            text-align: center;
            display: block;
            margin: 1rem 0;
        }
    }
`
