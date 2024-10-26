import { ButtonWppContainer, Question, Wpp } from './styles'

const ButtonWpp = () => {
    const message = 'Quero um serviço que não encontrei no site'
    return (
        <ButtonWppContainer
            target="_blank"
            href={`https://wa.me/558592234787?text=${message.replace(' ', '%0A')}`}
        >
            <Question className="question">
                <span>Não encontrou o que estava procurando?</span>
            </Question>
            <Wpp>
                <i className="fa-brands fa-whatsapp" />
            </Wpp>
        </ButtonWppContainer>
    )
}

export default ButtonWpp
