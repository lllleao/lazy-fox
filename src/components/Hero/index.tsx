import { HeroSection } from './styles'
import logo from '../../assets/logo.svg'
const Hero = () => {
    return (
        <HeroSection className="container">
            <img className="logo" srcSet={logo} alt="" />
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem aut, tempora iusto veniam dignissimos incidunt
                voluptatum optio. At, nisi, doloribus sed quaerat facere beatae,
                quisquam corrupti sequi vero similique velit?
            </p>
        </HeroSection>
    )
}

export default Hero
