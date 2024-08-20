import fgtsStory from '../../assets/imgs/fgtsStory.png'
import fgtsFeed from '../../assets/imgs/fgtsFeed.png'
import carroStory from '../../assets/imgs/carroStory.png'
import carroFeed from '../../assets/imgs/carrosFeed.png'
import sapatoFeed from '../../assets/imgs/sapatoFeed.png'
import sapatoStory from '../../assets/imgs/sapatoStory.png'
import paisFedd from '../../assets/imgs/paisFeed.jpeg'
import paisStory from '../../assets/imgs/paisStory.jpeg'
import {
    Card,
    CardsContainer,
    ProjectsContainer,
    SliderProjects,
    SubTitle
} from './styles'

const Projects = () => {
    return (
        <ProjectsContainer>
            <SubTitle>CRIATIVOS ESTÁTICOS</SubTitle>
            <CardsContainer>
                <Card>
                    <SliderProjects>
                        <img alt="" srcSet={fgtsStory} />
                        <img alt="" srcSet={fgtsFeed} />
                    </SliderProjects>
                </Card>
                <Card>
                    <SliderProjects>
                        <img alt="" srcSet={carroStory} />
                        <img alt="" srcSet={carroFeed} />
                    </SliderProjects>
                </Card>
                <Card>
                    <SliderProjects>
                        <img alt="" srcSet={sapatoStory} />
                        <img alt="" srcSet={sapatoFeed} />
                    </SliderProjects>
                </Card>
                <Card>
                    <SliderProjects>
                        <img alt="" srcSet={paisStory} />
                        <img alt="" srcSet={paisFedd} />
                    </SliderProjects>
                </Card>
            </CardsContainer>
        </ProjectsContainer>
    )
}

export default Projects
