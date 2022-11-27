import { renderHTML, getParams, fetchJson } from './util.js'
import { addProductToCart } from './add-product-to-cart.js'
let productDetailHTML = (data) => {
    return `<div class="product-details-top-right">
                    <div class="product-detail-slide-show">
                        <img src="${data.image}" alt="">
                    </div>
                </div>
                <div class="product-details-top-left">
                    <span class="stock-status ${data.label}"></span>
                    <h2 class="title-detail">${data.title}</h2>
                    <div class="product-detail-rating"><a class="product-rate">
                                    <em class="fas fa-star active"></em><em class="fas fa-star active"></em><em class="fas fa-star active"></em><em class="fas fa-star active"></em><em class="fas fa-star"></em>
                                </a></div>
                    <span class="product-category ${data.category}"></span>
                    <div class="product-detail-price">
                        <span class="product-detail-price-current">${data.price}</span>
                        <span class="product-detail-price-old">${data.oldPrice}</span>
                    </div>
                    <div action="" class="product-add-to-cart">
                        <input type="submit" value="Add to cart">
                    </div>
                    <h2>Thông tin sản phẩm</h2>
                    <p class="product-detail-description">${data.description}</p>
                </div>`
}
const renderProductDetail = async () => {
    let idProduct = getParams('id')
    let productData = await fetchJson('/api/v1/product.json')
    let productDetailsTop = document.querySelector('.product-details-top')
    renderHTML(productDetailsTop, productDetailHTML(productData[idProduct -1]))
    setTimeout(() => {
        document.querySelector('.product-add-to-cart input').addEventListener('click', () => {
            addProductToCart(productData[idProduct - 1])
        })
    }, 200)
}
renderProductDetail()