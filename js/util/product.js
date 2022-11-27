import { getDataFromLocal } from './local-data.js'
import { createNewId } from '../util/util.js'

const createProduct = async (product) => {
    let { products } = await getDataFromLocal()
    product.id = createNewId(products)
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
}

const removeProduct = async (productId) => {
    let { products } = await getDataFromLocal()
    products = products.filter(product => product.id != productId)
    localStorage.setItem('products', JSON.stringify(products))
}

const updateProduct = async (product) => {
    let { products } = await getDataFromLocal()
    for (const i = 0; i < products.length; i++) {
        if (products[i].id == product.id) {
            products[i] = product
            console.log(products[i], product)
            break
        }
    }
    localStorage.setItem('products', JSON.stringify(products))
}

const getProducts = async (options) => {
    let { products } = await getDataFromLocal()
    if (options != undefined) {
        if (options.category != undefined)
            products = products.filter(product => product.category === options.category)
        if (options.price != undefined) {
            if (options.price.low != undefined)
                products = products.filter(product => product.price >= options.price.low)
            if (options.price.high != undefined)
                products = products.filter(product => product.price <= options.price.high)
        }
        if (options.name != undefined) {
            products = products.filter(
                product => product.title.includes(options.name) || product.category.includes(options.name)
            )
        }
    }
    return products
}

const getCategory = async () => {
    let { products } = await getDataFromLocal()
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
    getCategory,
    removeProduct
}