import CardsTestimonials from './CardsTestimonials'
import { TestimonialsContainer } from './styles'

const Testimonials = () => {
    return (
        <TestimonialsContainer id="testimonials" className="container">
            <h3 className="title-testimo">Depoimentos</h3>
            <div className="cards-testim">
                <CardsTestimonials client="Mariana Lima">
                    O design ficou incrível! Conseguiram captar exatamente o que
                    eu queria e transformar minha marca em algo visualmente
                    impactante. Super recomendo!
                </CardsTestimonials>
                <CardsTestimonials client="Felipe George">
                    O serviço de design foi excepcional! O resultado final
                    refletiu perfeitamente a identidade do meu negócio. Recebo
                    elogios o tempo todo
                </CardsTestimonials>
                <CardsTestimonials client="Camila Ferreira">
                    O cuidado com os detalhes e a criatividade são
                    impressionantes. O meu site ficou moderno e profissional, do
                    jeito que eu esperava.
                </CardsTestimonials>
            </div>
        </TestimonialsContainer>
    )
}

export default Testimonials
