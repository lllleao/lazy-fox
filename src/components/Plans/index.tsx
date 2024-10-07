import CriativeAnimated from '../CriativeAnimated'
import CriativeStatic from '../CriativeStatic'
import Projects from '../Projects'
import { PlansContainer, Title } from './styles'

const Plans = () => {
    return (
        <PlansContainer id="plans">
            <Title>ESCOLHA SEUS SERVIÇOS!</Title>
            <Projects title={'CRIATIVOS ESTÁTICOS'} type>
                <CriativeStatic />
            </Projects>
            <Projects title={'CRIATIVOS ANIMADOS'}>
                <CriativeAnimated />
            </Projects>
        </PlansContainer>
    )
}

export default Plans
