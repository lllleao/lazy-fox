import { HeroSection, TextHome, Title } from './styles'

import manRun from '../../assets/imgs/manRun.png'

const Hero = () => {
    return (
        <HeroSection id="home">
            <div className="container">
                <div>
                    <Title>
                        Eleve Sua Marca <br />
                        <span className="second">ao Próximo Nível</span>
                    </Title>
                    <TextHome>
                        Na Lazy Fox Design, transformamos suas ideias em
                        criações impactantes. De criativos animados a
                        estratégias de marketing digital, temos as ferramentas
                        certas para destacar sua marca no mercado. Vamos juntos
                        impulsionar o seu sucesso online!
                    </TextHome>
                </div>
                <img className="rocket" src={manRun} alt="" />
            </div>
        </HeroSection>
    )
}

export default Hero
