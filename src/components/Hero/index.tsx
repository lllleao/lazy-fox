import { HeroSection, TextHome, Title } from './styles'

import rocket from '../../assets/imgs/fox-hero.png'
// import { useEffect, useRef, useState } from 'react'

const Hero = () => {
    // const [letters, setLetters] = useState('')
    // const hasMounted = useRef(false)
    // const text =
    //     'Naa Lazy Fox Design, transformamos suas ideias em criações impactantes. De criativos animados a estratégias de marketing digital, temos as ferramentas certas para destacar sua marca no mercado. Vamos juntos impulsionar o seu sucesso online!'

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (!hasMounted.current) {
    //             hasMounted.current = true
    //             let index = 0

    //             const intervelId = setInterval(() => {
    //                 if (index + 1 < text.length) {
    //                     setLetters((prev) => prev + text[index])
    //                     index++
    //                 } else {
    //                     clearInterval(intervelId)
    //                 }
    //             }, 20)
    //         }
    //     }, 2000)
    // }, [])

    return (
        <HeroSection id="home" className="container">
            <div>
                <Title>
                    Eleve Sua Marca <br />
                    <span className="second">ao Próximo Nível</span>
                </Title>
                <TextHome>
                    Na Lazy Fox Design, transformamos suas ideias em criações
                    impactantes. De criativos animados a estratégias de
                    marketing digital, temos as ferramentas certas para destacar
                    sua marca no mercado. Vamos juntos impulsionar o seu sucesso
                    online!
                </TextHome>
            </div>
            <img className="rocket" src={rocket} alt="" />
        </HeroSection>
    )
}

export default Hero
