import { ButtonWppContainer, Question, Wpp } from './styles'

const ButtonWpp = () => {
    return (
        <ButtonWppContainer>
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
