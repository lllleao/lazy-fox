import { useDispatch } from 'react-redux'
import { changePrice, deleteCart } from '../../store/cart'
import { priceChange } from '../../utils'
import OptionsProduct from '../Options'
import { CartCardContainer } from './styles'
import { useState } from 'react'

type Props = {
    isCardStatic: boolean
    name: string
    price: number
    idCartdCard: number
    valueSection: string
    id: number
}

const CartCard = ({
    isCardStatic,
    name,
    price,
    idCartdCard,
    valueSection,
    id
}: Props) => {
    const [valueQuant, setValueQuant] = useState(valueSection)
    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValueQuant(event.target.value)
        dispatch(
            changePrice({
                idCard: id,
                priceChanged: priceChange(event, isCardStatic),
                quantChande: event.target.value
            })
        )
    }

    return (
        <CartCardContainer>
            <div className="delete">
                <i
                    onClick={() => dispatch(deleteCart(idCartdCard))}
                    className="fa-solid fa-trash"
                />
            </div>
            {isCardStatic ? (
                <>
                    <div className="product-info-cart">
                        <i className="fa-solid fa-image" />
                        <span>R$ {price}</span>
                        <OptionsProduct
                            handleChange={handleChange}
                            isStaticSection={isCardStatic}
                            valueSection={valueQuant}
                        />
                    </div>
                    <h3>{name}</h3>
                </>
            ) : (
                <>
                    <div className="product-info-cart">
                        <i className="fa-solid fa-film" />
                        <span>R$ {price}</span>
                        <OptionsProduct
                            handleChange={handleChange}
                            isStaticSection={isCardStatic}
                            valueSection={valueQuant}
                        />
                    </div>
                    <h3>{name}</h3>
                </>
            )}
        </CartCardContainer>
    )
}

export default CartCard
