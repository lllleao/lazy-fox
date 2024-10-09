import { useEffect, useRef } from 'react'
import { CardContainer } from './styles'

type Props = {
    content: string
    img?: boolean
}

const Card = ({ content, img }: Props) => {
    const videosRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videosRef.current) {
            const video = videosRef.current

            video.play()
        }
    }, [])
    return (
        <CardContainer
            className={img ? 'card-static' : 'card-anime'}
            $back={img}
        >
            <span>
                {img ? (
                    <img srcSet={content} alt="" />
                ) : (
                    <video
                        ref={videosRef}
                        autoPlay
                        playsInline
                        muted
                        loop
                        src={content}
                    />
                )}
            </span>
        </CardContainer>
    )
}

export default Card
