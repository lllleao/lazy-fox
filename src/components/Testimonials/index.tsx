import CardsTestimonials from './CardsTestimonials'
import { TestimonialsContainer } from './styles'

const Testimonials = () => {
    return (
        <TestimonialsContainer id="testimonials" className="container">
            <h3 className="title-testimo">Depoimentos</h3>
            <div className="cards-testim">
                <CardsTestimonials />
                <CardsTestimonials />
                <CardsTestimonials />
            </div>
        </TestimonialsContainer>
    )
}

export default Testimonials
