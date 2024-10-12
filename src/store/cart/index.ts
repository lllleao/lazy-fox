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
    quantStatic: string
    quantAnime: string
}

type ChangePrice = {
    priceChanged: number
    idCard: number
    quantChande: string
}

const initialState: ProductConfig = {
    items: [],
    priceTot: 5,
    isOpen: false,
    quantStatic: '',
    quantAnime: ''
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
                    item.quant = acticon.payload.quantChande
                }
            })
        },
        changeQuant: (
            state,
            acticon: PayloadAction<{ newQuant: string; isStatic: boolean }>
        ) => {
            if (acticon.payload.isStatic) {
                state.quantStatic = acticon.payload.newQuant
            } else {
                state.quantAnime = acticon.payload.newQuant
            }
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

export const {
    changePrice,
    addCart,
    totalPrice,
    open,
    close,
    deleteCart,
    changeQuant
} = cartSlice.actions
export default cartSlice.reducer
