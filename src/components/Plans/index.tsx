import Projects from '../Projects'
import { PlansContainer, Title } from './styles'
// imgs
import fgtsStory from '../../assets/imgs/fgtsStory.png'
import fgtsFeed from '../../assets/imgs/fgtsFeed.png'
import carroStory from '../../assets/imgs/carroStory.png'
import carroFeed from '../../assets/imgs/carrosFeed.png'
import sapatoFeed from '../../assets/imgs/sapatoFeed.png'
import sapatoStory from '../../assets/imgs/sapatoStory.png'
import paisFedd from '../../assets/imgs/paisFeed.jpeg'
import paisStory from '../../assets/imgs/paisStory.jpeg'

// video
import brisaNet from '../../assets/videos/brisaNet.mp4'
import carros from '../../assets/videos/carros.mp4'
import motos from '../../assets/videos/motos.mp4'
import motoCarro from '../../assets/videos/motoCarro.mp4'
import motosMae from '../../assets/videos/motosMae.mp4'
import tim from '../../assets/videos/tim.mp4'

const staticCriative = [
    [fgtsStory, fgtsFeed],
    [carroStory, carroFeed],
    [sapatoStory, sapatoFeed],
    [paisStory, paisFedd]
]

const animetedCriative = [
    [brisaNet, carros, motos],
    [motoCarro, motosMae, tim]
]
const Plans = () => {
    return (
        <PlansContainer id="plans">
            <Title>CONHEÇA NOSSOS SERVIÇOS</Title>
            <Projects
                content={staticCriative}
                title={'CRIATIVOS ESTÁTICOS'}
                type
            />
            <Projects content={animetedCriative} title={'CRIATIVOS ANIMADOS'} />
        </PlansContainer>
    )
}

export default Plans
