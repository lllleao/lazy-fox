import * as S from './styles'
import { useEffect, useRef, useState } from 'react'

type Props = {
    image: string
    description: string
    site: string
    alt: string
}

const SiteCard = ({ description, image, site, alt }: Props) => {
    const [descHeight, setDescHeight] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const descRef = useRef<HTMLDivElement>(null)

    const handleGetHeight = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        setIsClicked(!isClicked)
    }

    useEffect(() => {
        if (descRef.current) {
            const hight = descRef.current.clientHeight
            setDescHeight(hight)
        }
    }, [])

    return (
        <S.ContainerFlip>
            <S.Card $isFlipped={isClicked}>
                <S.CardFront ref={descRef}>
                    <img srcSet={image} alt={alt} />

                    <S.Links>
                        <a target="_blank" href={site} rel="noreferrer">
                            <div className="svg-wrapper arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1rem"
                                    height="1rem"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                            <span>Ir para</span>
                        </a>
                        <a href="" onClick={(e) => handleGetHeight(e)}>
                            Ler mais
                        </a>
                    </S.Links>
                </S.CardFront>
                <S.CardBack $isFlipped={isClicked} $hoverHeight={descHeight}>
                    <p>{description}</p>
                    <S.FlipButton onClick={(e) => handleGetHeight(e)}>
                        Voltar
                    </S.FlipButton>
                </S.CardBack>
            </S.Card>
        </S.ContainerFlip>
    )
}

export default SiteCard
