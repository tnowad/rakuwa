import { productItemArray, productItemElements } from './add-product-to-shop.js'

const addProduct = (productData) => {
    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(productData);
    localStorage.setItem('products', JSON.stringify(products));
}

const removeProduct = (productId) => {
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.productId !== productId);
    localStorage.setItem('products', JSON.stringify(products));
}

productItemElements.forEach((element, index) => {
    element
        .querySelector('.product-add-cart')
        .addEventListener('click', () => {
            addProduct(productItemArray[index]);
        console.log(JSON.parse(localStorage.getItem('products')))
        })
})