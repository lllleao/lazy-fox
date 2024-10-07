import Hero from '../../components/Hero'
import Plans from '../../components/Plans'
import SitesProject from '../../components/SitesProject'
import { MainContainer, Overlay } from './styles'

const Main = () => {
    return (
        <>
            <MainContainer>
                <Overlay />
                <Hero />
                <Plans />
                <SitesProject />
            </MainContainer>
        </>
    )
}

export default Main
