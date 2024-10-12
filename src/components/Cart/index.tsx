import { useSelector } from 'react-redux'
import CartCard from '../CartCard'
import { CartContainer, OverLay } from './styles'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { close } from '../../store/cart'
import { selectorItems } from '../../store/cart/cartSelectos'

const Cart = () => {
    const items = useSelector((state: RootReducer) => selectorItems(state))
    const { isOpen } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const calcPriceTot = () => {
        const priceTotal = items.reduce((acum, current) => {
            acum += current.price

            return acum
        }, 0)

        return priceTotal
    }

    const quantOfProduct = (quant: string, isStatic: boolean) => {
        const index = Number(quant)
        const criativeStatic = [1, 2, 3, 5, 10, 15, 20]
        const criativeAnimated = [1, 2, 5, 10]

        if (isStatic) return criativeStatic[index]
        return criativeAnimated[index]
    }

    const message = `Gostaria de:%0A${items.map((item) => {
        return `${quantOfProduct(item.quant, item.isStaticCard)} ${item.name}`
    })}%0ATotal de: ${calcPriceTot()}`

    return (
        <>
            <OverLay
                className={isOpen ? 'overlay' : ''}
                onClick={() => dispatch(close())}
            />
            <CartContainer className={isOpen ? 'cartClosed' : ''}>
                <div className="close">
                    <i
                        onClick={() => dispatch(close())}
                        className="fa-solid fa-chevron-right"
                    />
                </div>
                {items.length === 0 ? (
                    <>
                        <div className="total-price">
                            <span>Não há items no carrinho</span>
                        </div>
                    </>
                ) : (
                    <>
                        {items.map(
                            ({ id, isStaticCard, name, price, quant }) => (
                                <div className="products" key={id}>
                                    <CartCard
                                        isCardStatic={isStaticCard}
                                        name={name}
                                        price={price}
                                        idCartdCard={id}
                                        valueSection={quant}
                                        id={id}
                                    />
                                </div>
                            )
                        )}
                        <div className="total-price">
                            <span>
                                O valor total é de {calcPriceTot().toFixed(2)}
                            </span>
                            <a
                                target="_black"
                                href={`https://wa.me/558592234787?text=${message.replace(',', '%0A')}`}
                            >
                                Finalizar Compra
                            </a>
                        </div>
                    </>
                )}
            </CartContainer>
        </>
    )
}

export default Cart
