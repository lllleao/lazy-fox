import { CellHome, HeroSection } from './styles'
import logo from '../../assets/logo.svg'
import cell from '../../assets/iphone.png'
import post from '../../assets/post_02_mobile.png'
const Hero = () => {
    return (
        <HeroSection className="container">
            <img className="logo" srcSet={logo} alt="" />
            <div className="desc">
                <CellHome>
                    <img className="cell" srcSet={cell} alt="" />
                    <img className="post" srcSet={post} alt="" />
                </CellHome>
            </div>
        </HeroSection>
    )
}

export default Hero
