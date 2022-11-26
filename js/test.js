import { createProduct, updateProduct, getCategory, getProducts } from "./util/product.js"

console.log(getCategory())
console.log(getProducts('meat', {low:1, high:100000}))