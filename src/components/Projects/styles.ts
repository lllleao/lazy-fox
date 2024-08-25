import styled from 'styled-components'

interface Props {
    $heightUp?: string
}

export const ProjectsContainer = styled.div<Props>`
    height: ${({ $heightUp }) => $heightUp};
    transition: height 1s;
    overflow: clip;
    margin-bottom: 1rem;

    &.container {
        width: 90%;
        margin-bottom: 1.5rem;
    }

    .product-description {
        display: flex;
    }
`

export const SubTitle = styled.h3<{ $type?: boolean }>`
    background-color: ${({ $type }) => ($type ? '#d46018' : '#172b84')};
    border-radius: 1rem;
    font-family: var(--font-primary);
    text-align: center;
    margin-bottom: 2rem;
    padding: 0.5rem 0;
    font-size: 1.5rem;
    cursor: pointer;

    img {
        margin-left: 1rem;
        width: 22px;
    }
`

export const CardsContainer = styled.div<{ $type?: boolean }>`
    display: grid;
    grid-template-columns: ${({ $type }) =>
        $type
            ? 'repeat(2, minmax(200px, max-content))'
            : 'minmax(200px, max-content)'};
    gap: 2rem;
    justify-content: center;
    margin-left: 1rem;
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
        border: 1px solid #fff;

        .up {
            display: flex;
            align-items: center;
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
    margin-left: 2rem;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    .price {
        font-family: var(--font-primary);

        span {
            font-weight: bold;
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 3px 3px 5px #000;
        }

        p {
            text-align: justify;
            font-size: 1.5rem;
            margin: 2rem 0;
            line-height: 1.8rem;
            text-shadow: 3px 3px 5px #000;
        }
    }
`
