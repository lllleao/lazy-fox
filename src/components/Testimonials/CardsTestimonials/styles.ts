import styled from 'styled-components'

export const CardContainer = styled.div`
    display: inline-block;
    padding: 1rem;
    background-color: rgba(243, 244, 246, 1);
    font-family: var(--font-primary);
    /* max-width: 320px; */
    border-radius: 0.5rem;
    box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
    flex: 0 1 320px;

    .title-stars {
        margin-bottom: 0.5rem;
        h4 {
            text-align: center;
            color: #000;
            font-size: 1.3rem;
        }

        .stars {
            display: flex;
            justify-content: center;
            margin-top: 0.5rem;
            svg {
                width: 20px;
            }
        }
    }

    .testimonials {
        p {
            display: -webkit-box;
            color: #000;
            text-align: center;
        }
    }
`
