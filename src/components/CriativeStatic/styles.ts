import styled from 'styled-components'
import { CardContainer } from '../Card/styles'
import { ProductInfo, ProjectsContainer } from '../../global'

export const CardsStaticContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    height: clamp(250px, 90vw, 598px);
    width: clamp(250px, 90vw, 532px);
    margin-left: 1rem;
    overflow: hidden;

    ${CardContainer} {
        height: clamp(250px, 85vw, 500px);
        width: clamp(250px, 85vw, 634px);
    }

    @media (max-width: 901px) {
        margin-left: 0;
    }
`

export const ProjectsContainerStatic = styled(ProjectsContainer)`
    ${ProductInfo} {
        @media (max-width: 1262px) {
            width: 80%;
        }
    }
`
