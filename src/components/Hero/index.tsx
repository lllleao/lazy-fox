import { CellHome, HeroSection, ShowHome } from './styles'
import logo from '../../assets/imgs/logo.svg'
import cell from '../../assets/imgs/iphone-png.png'
import brisanet from '../../assets/videos/brisenet.mp4'
import foxWithe from '../../assets/imgs/fox-withe.svg'
import rocktGuy from '../../assets/imgs/rocket-guy.png'
const Hero = () => {
    return (
        <HeroSection className="container">
            <img className="logo" srcSet={logo} alt="" />
            <ShowHome>
                <img className="fox" srcSet={foxWithe} alt="" />
                <img className="rocket" srcSet={rocktGuy} alt="" />
                <CellHome>
                    <img className="cell" srcSet={cell} alt="" />
                    <video
                        className="post"
                        autoPlay={true}
                        muted
                        src={brisanet}
                    ></video>
                </CellHome>
            </ShowHome>
        </HeroSection>
    )
}

export default Hero
