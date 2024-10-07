import { useRef } from 'react'
import Card from '../Card'
import { CardsAnimated } from './styles'

// video
import brisaNet from '../../assets/videos/brisaNet.mp4'
import carros from '../../assets/videos/carros.mp4'
import motos from '../../assets/videos/motos.mp4'
import motoCarro from '../../assets/videos/motoCarro.mp4'
import motosMae from '../../assets/videos/motosMae.mp4'
import tim from '../../assets/videos/tim.mp4'
import sliderCards from '../../utils'

const animetedCriative = [brisaNet, carros, motos, motoCarro, motosMae, tim]
const CriativeAnimated = () => {
    const cardContainerRef = useRef<HTMLDivElement>(null)
    const hasMounted = useRef(false)

    return (
        <CardsAnimated
            onLoadStart={() =>
                sliderCards(
                    cardContainerRef,
                    hasMounted,
                    'card-anime',
                    true,
                    4000
                )
            }
            ref={cardContainerRef}
        >
            {animetedCriative.map((card) => (
                <Card img={false} key={card} content={card} />
            ))}
            <Card
                img={false}
                key={'clone-video'}
                content={animetedCriative[0]}
            />
        </CardsAnimated>
    )
}

export default CriativeAnimated
