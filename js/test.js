import { createProduct, updateProduct, getCategory, getProducts, removeProduct } from "./util/product.js"
console.log(getProducts())
console.log(updateProduct({
    "amount": 72,
    "category": "ga",
    "description": "Ex esse aliquip cillum esse excepteur dolor cillum ullamco. Exercitation dolore proident enim sint veniam culpa pariatur laboris. Pariatur aliquip cillum amet minim aute.",
    "id": 1,
    "image": "/img/products/thit-bo.png",
    "label": "hot",
    "price": "200000",
    "rating": 5,
    "title": "Thịt Bò"
}))
console.log(getProducts())