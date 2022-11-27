import { createProduct, updateProduct, getCategory, getProducts, removeProduct } from "./util/product.js"
console.log(await getProducts())
console.log(await getProducts({category:"egg"}))
console.log(await getProducts())