import styled from 'styled-components'

export const SitesSection = styled.section`
    padding-top: 3rem;
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
`
