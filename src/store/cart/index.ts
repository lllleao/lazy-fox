import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Product = {
    id: number
    price: number
    name: string
    isStaticCard: boolean
    quant: string
}

type ProductConfig = {
    items: Product[]
    priceTot: number
    isOpen: boolean
}

type ChangePrice = {
    priceChanged: number
    idCard: number
}

const initialState: ProductConfig = {
    items: [],
    priceTot: 5,
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        changePrice: (state, acticon: PayloadAction<ChangePrice>) => {
            const { priceChanged } = acticon.payload

            state.items.map((item) => {
                if (item.id === acticon.payload.idCard) {
                    item.price = priceChanged
                }
            })
        },
        totalPrice: (state, acticon: PayloadAction<number>) => {
            const priceTotal = acticon.payload

            state.priceTot = priceTotal
        },
        addCart: (state, acticon: PayloadAction<Product>) => {
            const isMoreThenTwo = state.items.length < 2

            const isAlreadyAdd = state.items.some((item) => {
                return item.id === acticon.payload.id
            })

            if (isMoreThenTwo && !isAlreadyAdd) {
                const newItem = acticon.payload
                state.items.push(newItem)
            }
        },
        deleteCart: (state, acticon: PayloadAction<number>) => {
            state.items = state.items.filter((item) => {
                return item.id !== acticon.payload
            })
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { changePrice, addCart, totalPrice, open, close, deleteCart } =
    cartSlice.actions
export default cartSlice.reducer
