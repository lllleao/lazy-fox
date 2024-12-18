import styled from 'styled-components'
import { CardContainer } from '../Card/styles'
import { ProjectsContainer } from '../../global'

export const CardsAnimated = styled.div`
    height: 498px;
    overflow: hidden;

    ${CardContainer} {
        display: block;
        margin: 0 7rem 32px 0;
        height: 478px;

        video {
            height: 100%;
            width: 100%;
            border-radius: 1rem;
        }

        @media (max-width: 901px) {
            margin: 0 auto 2rem auto;
        }
    }
`

export const ProjectsContainerAnimeted = styled(ProjectsContainer)``
