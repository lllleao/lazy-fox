import styled from 'styled-components'

export const FooterContainer = styled.footer`
    margin-top: 4rem;
    background-color: #d46018;
    padding: 2rem 0 1rem;
    font-family: var(--font-primary);
    & .container {
        display: flex;
        gap: 32rem;
        align-items: center;

        .options {
            li {
                cursor: pointer;
                margin-bottom: 1rem;
            }
        }

        .social-links {
            margin-top: 1rem;
            display: flex;
            gap: 1rem;
            justify-content: center;

            li {
                cursor: pointer;
                width: 40px;
                height: 40px;
                /* background-color: #f61d4b; */
                border-radius: 50px;
                line-height: 45px;
                text-align: center;
                transition: background-color 0.3s;

                i {
                    font-size: 1.5rem;
                    transition: color 0.3s;
                }

                &:hover {
                    &:nth-child(1) {
                        background-color: #f61d4b;
                    }
                    &:nth-child(2) {
                        background-color: #4242ee;
                    }
                }
            }
        }
    }
`
