import { productTypes } from "../types/index";

const {SELECT_PRODUCT, FILTER_PRODUCTS} = productTypes

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productID: id
})

export const filterProducts = (id) => ({
    type: FILTER_PRODUCTS,
    categoryID: id
})