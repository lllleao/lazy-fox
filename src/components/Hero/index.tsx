import { HeroSection } from './styles'
import logo from '../../assets/logo.svg'
const Hero = () => {
    return (
        <HeroSection className="container">
            <img className="logo" srcSet={logo} alt="" />
            <div className="desc">
                <p>Não perca tempo e garanta seu espaço no mercado digital</p>
                <button>Melhore sua imagem</button>
            </div>
        </HeroSection>
    )
}

export default Hero
