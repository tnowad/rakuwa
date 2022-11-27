import { createProduct, updateProduct, getCategory, getProducts, removeProduct } from "./util/product.js"
console.log(await getProducts())
console.log(await getProducts({name:"thịt bò meat"}))
console.log(await getProducts())