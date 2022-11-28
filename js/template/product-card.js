import { rate } from './rate.js'
const productCart = (product) => /* html */ `
    <div class="product-item">
        ${product.label ? `<span class="label ${product.label}"></span>` : ''}
        <div class="container">
            <div class="product-item-top">
                <img src="${product.image}" class="product-img">
            </div>
            <div class="product-item-center">
                <div class="product-category">
                    <a href="" class="product-category ${product.category}"></a>
                </div>
                <a
                    class="product-name"
                    href="/pages/product.html?id=${product.id}"
                    >
                    ${product.title}
                </a>
                <div class="product-rate">
                    ${rate(product.rating)}
                </div>
            </div>
            <div class="product-item-bottom">
                <div class="product-price">
                    <span class="price">
                        ${new Intl.NumberFormat().format(product.price)} VND
                    </span>
                    ${
						product.oldPrice
							? /* html */ `
                                <br/>
                                <span class="old-price">
                                    ${new Intl.NumberFormat().format(
										product.oldPrice
									)} VND
                                </span>`
							: ''
					}
                </div>
            </div>
            <div class="product-add-cart">
                <span>
                    <a class="fa-solid fa-cart-shopping"></a>Add
                </span>
            </div>
        </div>
    </div>
`
export { productCart }
