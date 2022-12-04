import { getTotalPriceProductIdInCart } from '../util/cart.js'
import { addProductIdToCart } from '../util/cart.js'
import { render } from '../render/cart-detail.js'

const updateCart = () => {
	setTimeout(render, 0)
}

const cart = (product) => {
	return /* html */ `
        <tr>
            <td><img src="${product.image}"></td>
            <td>${product.title}</td>
            <td>${product.price} VND</td>
            <td>
            <input
                type="number"
                min = 1
                max = ${product.amount}
                value = ${product.quantity}
                onchange="
                    addProductIdToCart(${product.id}, this.value); updateCart()"
                >
            </td>
            <td>${product.quantity * product.price}</td>
            <td>
                <button class="delete"><i class="fas fa-x"></i></button>
            </td>
        </tr>
    `
}
window.updateCart = updateCart
window.addProductIdToCart = addProductIdToCart

export { cart }
