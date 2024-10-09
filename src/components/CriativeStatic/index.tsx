import { useRef, useState } from 'react'
import { CardsStaticContainer, ProjectsContainerStatic } from './styles'
import Card from '../Card'
// imgs
import fgtsFeed from '../../assets/imgs/fgtsFeed.png'
import carroFeed from '../../assets/imgs/carrosFeed.png'
import sapatoFeed from '../../assets/imgs/sapatoFeed.png'
import paisFedd from '../../assets/imgs/paisFeed.jpeg'
import sliderCards from '../../utils'
import { Button, ProductInfo, SubTitleCriatives } from '../../global'

const staticCriative = [fgtsFeed, carroFeed, sapatoFeed, paisFedd]

type Props = {
    title: string
}

const CriativeStatic = ({ title }: Props) => {
    const cardContainerRef = useRef<HTMLDivElement>(null)
    const hasMounted = useRef(false)

    const [price, setPrice] = useState('24.99')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const prices = [
            '24.99',
            '47.49',
            '67.49',
            '99.99',
            '187.49',
            '262.49',
            '324.99'
        ]
        const index = Number(event.target.value)
        setPrice(prices[index])
    }

    return (
        <ProjectsContainerStatic id="static" className="container">
            <SubTitleCriatives className="ant-container">
                {title}
            </SubTitleCriatives>
            <div className="product-info">
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
                    <Card
                        img={true}
                        key={'clone-img'}
                        content={staticCriative[0]}
                    />
                </CardsStaticContainer>
                <ProductInfo>
                    <div className="description">
                        <div className="price">
                            <span>R$ {price.replace('.', ',')}</span>
                            <select
                                className="price-values"
                                name="price-values"
                                id="price-values"
                                onChange={(event) => handleChange(event)}
                            >
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">5</option>
                                <option value="4">10</option>
                                <option value="5">15</option>
                                <option value="6">20</option>
                            </select>
                        </div>
                        <p>
                            Destaque o melhor da sua marca com nossos criativos
                            estáticos exclusivos! Transforme visualizações em
                            engajamento com designs que capturam a essência do
                            seu produto e garantem um visual impactante para
                            suas redes.
                        </p>
                    </div>
                    <Button className="button">
                        <button>
                            <span className="up">
                                Eleve sua marca
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
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
        </ProjectsContainerStatic>
    )
}

export default CriativeStatic
