import Hero from '../../components/Hero'
import Plans from '../../components/Plans'
import SitesProject from '../../components/SitesProject'
import Testimonials from '../../components/Testimonials'
import { MainContainer } from './styles'

const Main = () => {
    return (
        <>
            <MainContainer>
                <Hero />
                <Plans />
                <SitesProject />
                <Testimonials />
            </MainContainer>
        </>
    )
}

export default Main
