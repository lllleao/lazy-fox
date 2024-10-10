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

    return (
        <>
            <OverLay
                className={isOpen ? 'overlay' : ''}
                onClick={() => dispatch(close())}
            />
            <CartContainer className={isOpen ? 'cartClosed' : ''}>
                {items.length === 0 ? (
                    <>
                        <div className="close">
                            <i
                                onClick={() => dispatch(close())}
                                className="fa-solid fa-x"
                            />
                        </div>
                        <div className="total-price">
                            <span>Não há items no carrinho</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="close">
                            <i
                                onClick={() => dispatch(close())}
                                className="fa-solid fa-x"
                            />
                        </div>
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
                            <button>Finalizar Compra</button>
                        </div>
                    </>
                )}
            </CartContainer>
        </>
    )
}

export default Cart
