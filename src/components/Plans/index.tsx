import Projects from '../Projects'
import { PlansContainer, Title } from './styles'
import fgtsStory from '../../assets/imgs/fgtsStory.png'
import fgtsFeed from '../../assets/imgs/fgtsFeed.png'
import carroStory from '../../assets/imgs/carroStory.png'
import carroFeed from '../../assets/imgs/carrosFeed.png'
import sapatoFeed from '../../assets/imgs/sapatoFeed.png'
import sapatoStory from '../../assets/imgs/sapatoStory.png'
import paisFedd from '../../assets/imgs/paisFeed.jpeg'
import paisStory from '../../assets/imgs/paisStory.jpeg'

const staticCriative = [
    [fgtsStory, fgtsFeed],
    [carroStory, carroFeed],
    [sapatoStory, sapatoFeed],
    [paisStory, paisFedd]
]

const Plans = () => {
    return (
        <PlansContainer>
            <Title>CONHEÇA NOSSOS SERVIÇOS</Title>
            <Projects
                id={1}
                content={staticCriative}
                title={'CRIATIVOS ESTÁTICOS'}
            />
            <Projects
                id={1}
                content={staticCriative}
                title={'CRIATIVOS ESTÁTICOS'}
            />
        </PlansContainer>
    )
}

export default Plans
