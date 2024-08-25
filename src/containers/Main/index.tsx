import Hero from '../../components/Hero'
import Plans from '../../components/Plans'
import Footer from '../Footer'
import { MainContainer, Overlay } from './styles'

const Main = () => {
    return (
        <>
            <MainContainer>
                <Overlay />
                <Hero />
                <Plans />
                <Footer />
            </MainContainer>
        </>
    )
}

export default Main
