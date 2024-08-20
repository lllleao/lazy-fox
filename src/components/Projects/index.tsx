import acaiStory from '../../assets/imgs/acai.png'
import acaiFeed from '../../assets/imgs/acaifeed.png'
import motoFeed from '../../assets/imgs/motoFeed.png'
import carroStory from '../../assets/imgs/carrosStory.png'
import blueFeed from '../../assets/imgs/bluefeed.png'
import blueStory from '../../assets/imgs/blueStory.png'
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
                        <img alt="" srcSet={acaiStory} />
                        <img alt="" srcSet={acaiFeed} />
                    </SliderProjects>
                </Card>
                <Card>
                    <SliderProjects>
                        <img alt="" srcSet={carroStory} />
                        <img alt="" srcSet={motoFeed} />
                    </SliderProjects>
                </Card>
                <Card>
                    <SliderProjects>
                        <img alt="" srcSet={blueStory} />
                        <img alt="" srcSet={blueFeed} />
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
