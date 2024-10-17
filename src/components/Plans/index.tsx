import CriativeAnimated from '../CriativeAnimated'
import CriativeStatic from '../CriativeStatic'
import { Title } from './styles'

const Plans = () => {
    return (
        <section id="plans">
            <Title>
                <span>ESCOLHA SEUS SERVIÇOS!</span>
            </Title>
            <CriativeStatic title="CRIATIVOS ESTÁTICOS" />
            <CriativeAnimated title="CRIATIVOS ANIMADOS" />
        </section>
    )
}

export default Plans
