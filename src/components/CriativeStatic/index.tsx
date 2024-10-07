import { useRef } from 'react'
import { CardsStaticContainer } from './styles'
import Card from '../Card'
// imgs
import fgtsFeed from '../../assets/imgs/fgtsFeed.png'
import carroFeed from '../../assets/imgs/carrosFeed.png'
import sapatoFeed from '../../assets/imgs/sapatoFeed.png'
import paisFedd from '../../assets/imgs/paisFeed.jpeg'
import sliderCards from '../../utils'

const staticCriative = [fgtsFeed, carroFeed, sapatoFeed, paisFedd]

const CriativeStatic = () => {
    const cardContainerRef = useRef<HTMLDivElement>(null)
    const hasMounted = useRef(false)

    return (
        <CardsStaticContainer
            onLoad={() =>
                sliderCards(
                    cardContainerRef,
                    hasMounted,
                    'card-static',
                    false,
                    3000
                )
            }
            ref={cardContainerRef}
        >
            {staticCriative.map((card) => (
                <Card img={true} key={card} content={card} />
            ))}
            <Card img={true} key={'clone-img'} content={staticCriative[0]} />
        </CardsStaticContainer>
    )
}

export default CriativeStatic
