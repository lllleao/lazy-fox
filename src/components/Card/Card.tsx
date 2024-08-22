import { CardContainer } from './styles'

type Props = {
    content: string[]
    img?: boolean
}

const Card = ({ content, img }: Props) => {
    return (
        <CardContainer $back={img}>
            {content.map((item) => (
                <span key={item}>
                    {img ? (
                        <img srcSet={item} alt="" />
                    ) : (
                        <video autoPlay muted loop src={item} />
                    )}
                </span>
            ))}
        </CardContainer>
    )
}

export default Card
