import motos from '../../assets/videos/motos.mp4'
import carros from '../../assets/videos/carros.mp4'
import { SliderContainer } from './styles'

const Slider = () => {
    return (
        <SliderContainer>
            <video
                className="post"
                autoPlay={true}
                muted
                src={motos}
                loop
            ></video>
            <video
                className="post"
                autoPlay={true}
                muted
                src={carros}
                loop
            ></video>
        </SliderContainer>
    )
}

export default Slider
