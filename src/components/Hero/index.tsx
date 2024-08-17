import { CellHome, HeroSection, ShowHome } from './styles'
import logo from '../../assets/imgs/logo.svg'
import cell from '../../assets/imgs/iphone.svg'
import foxWithe from '../../assets/imgs/fox-withe.svg'
import rocktGuy from '../../assets/imgs/rocket-guy.png'
import Slider from '../Slider'

const Hero = () => {
    return (
        <HeroSection className="container">
            <img className="logo" srcSet={logo} alt="" />
            <ShowHome>
                <img className="fox" srcSet={foxWithe} alt="" />
                <img className="rocket" srcSet={rocktGuy} alt="" />
                <CellHome>
                    <img className="cell" srcSet={cell} alt="" />
                    <Slider />
                </CellHome>
            </ShowHome>
        </HeroSection>
    )
}

export default Hero
