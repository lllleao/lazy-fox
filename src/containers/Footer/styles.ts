import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #d46018;
    padding: 2rem 0 1rem;
    font-family: var(--font-primary);
    & .container {
        display: flex;
        align-items: center;

        .options {
            li {
                a {
                    display: block;
                    cursor: pointer;
                    margin-bottom: 1rem;
                    padding: 5px 8px;
                    text-decoration: none;

                    &:hover {
                        background-color: #000;
                    }
                }
            }
        }

        .copy {
            margin: 0 auto;
            .social-links {
                margin-top: 1rem;
                display: flex;
                gap: 1rem;
                justify-content: center;

                li {
                    width: 40px;
                    height: 40px;
                    border-radius: 50px;
                    transition: background-color 0.3s;
                    a {
                        display: block;
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 50px;
                        line-height: 45px;
                        text-align: center;

                        i {
                            font-size: 1.5rem;
                            transition: color 0.3s;
                        }
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
        @media (max-width: 767px) {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }
`
