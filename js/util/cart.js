import { getDataFromLocal } from "./local-data.js"
import { getProductById } from "./product.js"
const addProductIdToCart = async (productId, quantity) => {
    let { currentCart } = await getDataFromLocal()
    let product = await getProductById(productId)

    console.log(product)

    product.quantity = product.quantity ? product.quantity + 1 : 0

    currentCart.push(product)
    localStorage.setItem('currentCart', JSON.stringify(currentCart))
}

const getCurrentCart = async () => {
    let { currentCart } = await getDataFromLocal()
    return currentCart
}

export {
    getCurrentCart,
    addProductIdToCart
}