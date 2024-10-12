import styled from 'styled-components'
import { Button } from '../../global'

export const SitesSection = styled.section`
    padding-top: 95.5px;

    ${Button} {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        a {
            font-family: var(--font-primary);
            text-decoration: none;
            display: block;
            width: 300px;
        }
    }
`

export const TitleSites = styled.h3`
    font-family: var(--font-primary);
    font-size: 2rem;
    text-align: center;
`
export const Tags = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1.5rem 0 0.5rem;

    li {
        margin-right: 0.5rem;
        margin-bottom: 6px;
        i {
            font-size: 32px;
        }
    }
`
export const CardsSitesContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 2rem;

    @media (max-width: 767px) {
        display: block;
    }
`
