import { Timestamp } from "firebase/firestore"

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
    emptyCart: () =>void
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

export interface chefDetails {
    id: number,
    name: string,
    image: string,
    role: string,
    about: string
}

export interface orderType {
    id?: string
    name?: string,
    email?: string,
    order?: string,
    phone_number?: string,
    delivery_address?: string,
    timestamp?: Timestamp,
    fulfilled?:boolean,
    cost?: number,
    delivery_fee?: number
}