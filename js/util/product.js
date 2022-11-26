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
        if (products[i].id == product.id) {
            products[i] == product
            console.log(products[i], pro)
            break
        }
    }
    localStorage.setItem('products', JSON.stringify(products))
}

const getProducts = (category, price) => {
    if (category != undefined)
        products = products.filter(product => product.category === category)
    if (price != undefined) {
        if (price.low != undefined)
            products = products.filter(product => product.price >= price.low)
        if (price.high != undefined)
            products = products.filter(product => product.price <= price.high)
    }

    return products
}

const getCategory = () => {
    let category = {}
    products.forEach((value) => {
        category[value.category] = category[value.category] ? category[value.category] + 1 : 1
    })
    return category
}

export {
    createProduct,
    updateProduct,
    getProducts,
    getCategory
}