import { cart } from "./mock_cart"
export const orders = [
    {
        id: 0,
        date: 123456789,
        total: cart.reduce((prev, item) => prev+item.price,0 ),
        items: [
            cart
        ]
    },
    {
        id: 1,
        date: 122222231,
        total: cart.reduce((prev, item) => prev+item.price,0 ),
        items: [
            cart
        ]
    }
]