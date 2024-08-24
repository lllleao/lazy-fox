import Hero from '../../components/Hero'
import Plans from '../../components/Plans'
import { MainContainer, Overlay } from './styles'

const Main = () => {
    return (
        <MainContainer>
            <Overlay />
            <Hero />
            <Plans />
        </MainContainer>
    )
}

export default Main
