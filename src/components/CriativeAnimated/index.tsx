import { useRef, useState } from 'react'
import Card from '../Card'
import { CardsAnimated } from './styles'

// video
import brisaNet from '../../assets/videos/brisaNet.mp4'
import carros from '../../assets/videos/carros.mp4'
import motos from '../../assets/videos/motos.mp4'
import motoCarro from '../../assets/videos/motoCarro.mp4'
import motosMae from '../../assets/videos/motosMae.mp4'
import tim from '../../assets/videos/tim.mp4'
import sliderCards, { priceChange } from '../../utils'
import {
    Button,
    ProductInfo,
    ProjectsContainer,
    SubTitleCriatives
} from '../../global'
import OptionsProduct from '../Options'
import { useDispatch } from 'react-redux'
import { addCart, open } from '../../store/cart'
import { useInView } from 'react-intersection-observer'

type Props = {
    title: string
}

const animetedCriative = [brisaNet, carros, motos, motoCarro, motosMae, tim]
const CriativeAnimated = ({ title }: Props) => {
    const { ref: myRef, inView } = useInView({ threshold: 0.2 })
    const cardContainerRef = useRef<HTMLDivElement>(null)
    const [valueSection, setValueSection] = useState('0')
    const hasMounted = useRef(false)
    const dispatch = useDispatch()

    const [price, setPrice] = useState(34.99)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValueSection(event.target.value)
        setPrice(priceChange(event, false))
    }

    const addToCart = () => {
        dispatch(open())
        dispatch(
            addCart({
                id: 2,
                isStaticCard: false,
                name: title,
                price: price,
                quant: valueSection
            })
        )
    }

    return (
        <>
            <ProjectsContainer id="animated" className="container">
                <SubTitleCriatives className="ant-container">
                    {title}
                </SubTitleCriatives>
                <div ref={myRef} className="product-info">
                    <CardsAnimated
                        onLoadStart={() =>
                            sliderCards(
                                cardContainerRef,
                                hasMounted,
                                'card-anime',
                                true,
                                4000,
                                inView
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
                    <ProductInfo>
                        <div className="description">
                            <div className="price">
                                <span>
                                    R$ {String(price).replace('.', ',')}
                                </span>
                                <OptionsProduct
                                    isStaticSection={false}
                                    handleChange={handleChange}
                                    valueSection={valueSection}
                                />
                            </div>
                            <p>
                                Dê vida ao seu produto com nossos criativos
                                animados exclusivos! Transforme cliques em
                                conversões com animações que capturam a atenção
                                e destacam o valor da sua marca.
                            </p>
                        </div>
                        <Button onClick={addToCart} className="button">
                            <button>
                                <span className="up">
                                    Eleve sua marca
                                    <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="down">
                                    Encomende o seu já
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="cart-icon"
                                    >
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </span>
                            </button>
                        </Button>
                    </ProductInfo>
                </div>
            </ProjectsContainer>
        </>
    )
}

export default CriativeAnimated
