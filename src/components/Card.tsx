import { CardContainer } from './styles'

type Props = {
    content: string[]
    id: number
}

const Card = ({ content, id }: Props) => {
    return (
        <CardContainer>
            {content.map((item) => (
                <span key={id}>
                    {' '}
                    <img srcSet={item} alt="" />
                </span>
            ))}
        </CardContainer>
    )
}

export default Card
