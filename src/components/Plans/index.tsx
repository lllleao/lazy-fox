import CriativeAnimated from '../CriativeAnimated'
import CriativeStatic from '../CriativeStatic'
import { PlansContainer, Title } from './styles'

const Plans = () => {
    return (
        <PlansContainer id="plans">
            <Title>ESCOLHA SEUS SERVIÇOS!</Title>
            <CriativeStatic type={true} title="CRIATIVOS ESTÁTICOS" />
            <CriativeAnimated type={false} title="CRIATIVOS ANIMADOS" />
        </PlansContainer>
    )
}

export default Plans
