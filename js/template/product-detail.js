import { rate } from './rate.js'
let productDetail = (product) => /* html */ `
    <div class="product-details-top-right">
        <div class="product-detail-slide-show">
            <img src="${product.image}" alt="">
        </div>
    </div>
    <div class="product-details-top-left">
        <span class="stock-status ${product.label}"></span>
        <h2 class="title-detail">
            ${product.title}
        </h2>
        <div class="product-detail-rating">
            <a class="product-rate">
                ${rate(product.rating)}
            </a>
        </div>
        <span
            class="product-category ${product.category}">
        </span>
        <div class="product-detail-price">
            <span class="product-detail-price-current">
                ${product.price}
            </span>
            <span class="product-detail-price-old">
                ${product.oldPrice || ''}
            </span>
        </div>
        <div action="" class="product-add-to-cart">
            <input
                type="submit"
                value="Add to cart"
                onclick="addProductIdToCart(${product.id})">
        </div>
        <h2>Thông tin sản phẩm</h2>
        <p class="product-detail-description">
            ${product.description}
        </p>
    </div>
`

export { productDetail }
