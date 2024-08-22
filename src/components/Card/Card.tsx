import { CardContainer } from './styles'

type Props = {
    content: string[]
    id: number
    img?: boolean
}

const Card = ({ content, id, img }: Props) => {
    return (
        <CardContainer $back={img}>
            {content.map((item) => (
                <span key={id}>
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
