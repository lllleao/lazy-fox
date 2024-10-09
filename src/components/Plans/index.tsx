import CriativeAnimated from '../CriativeAnimated'
import CriativeStatic from '../CriativeStatic'
import { PlansContainer, Title } from './styles'

const Plans = () => {
    return (
        <PlansContainer id="plans">
            <Title>ESCOLHA SEUS SERVIÇOS!</Title>
            <CriativeStatic title="CRIATIVOS ESTÁTICOS" />
            <CriativeAnimated title="CRIATIVOS ANIMADOS" />
        </PlansContainer>
    )
}

export default Plans
