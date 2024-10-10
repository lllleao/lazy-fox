import { RootReducer } from '..'

export const selectorItems = (root: RootReducer) => {
    const { items } = root.cart

    return items
}
