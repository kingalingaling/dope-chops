export interface foodDetails {
    id: number,
    name: string,
    category: string,
    image: string,
    info: string,
    num: number,
    price: number,
    priceRange: string,
    featured: boolean
}

export type foodCartContextProviderProps = {
    children: React.ReactNode
}

export interface foodCartCon {
    getItemQuantity:(id:number) => number,
    increaseCartQuantity:(id:number) => void,
    decreaseCartQuantity:(id:number) => void,
    removeFromCart: (id:number) => void
    cartQuantity: number
    cartItems: cartItem[]
}

export type cartItem = {
    id: number
    quantity: number
}

export type OrderItemProps = {
    id: number
    quantity: number
}