import { getDataFromLocal } from './local-data.js'
import { createNewId } from '../util/util.js'
let { products } = await getDataFromLocal()

const createProduct = (product) => {
    product.id = createNewId(products)
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
}

const updateProduct = (product) => {
    for (const i = 0; i < products.length; i++) {
        if(products[i].id == product.id) {
            products[i] == product
            console.log(products[i], pro)
            break
        }
    }
    localStorage.setItem('products', JSON.stringify(products))
}

export {
    createProduct,
    updateProduct
}