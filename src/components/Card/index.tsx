import { CardContainer } from './styles'

type Props = {
    content: string
    img?: boolean
}

const Card = ({ content, img }: Props) => {
    return (
        <CardContainer
            className={img ? 'card-static' : 'card-anime'}
            $back={img}
        >
            <span>
                {img ? (
                    <img srcSet={content} alt="" />
                ) : (
                    <video autoPlay muted loop src={content} />
                )}
            </span>
        </CardContainer>
    )
}

export default Card
