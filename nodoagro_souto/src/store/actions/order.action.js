import { orderTypes } from "../types/index";

const {SELECT_ORDER, ANY_ORDER} = orderTypes

export const selectOrder = (id) => ({
    type: SELECT_ORDER,
    orderID: id
})

export const anyLoadedOrder = () => ({
    type: ANY_ORDER

})