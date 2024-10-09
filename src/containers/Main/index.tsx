import Hero from '../../components/Hero'
import Plans from '../../components/Plans'
import SitesProject from '../../components/SitesProject'
import { MainContainer } from './styles'

const Main = () => {
    return (
        <>
            <MainContainer>
                <Hero />
                <Plans />
                <SitesProject />
            </MainContainer>
        </>
    )
}

export default Main
