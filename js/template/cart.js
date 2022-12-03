import { getTotalPriceProductIdInCart } from '../util/cart.js'

const cart = (product) => {
	return `
        <tr>
            <td><img src="${product.image}"></td>
            <td>${product.title}</td>
            <td>${product.price} VND</td>
            <td>${product.quantity}</td>
            <td>${product.quantity * product.price}</td>
            <td>
                <button class="delete">X</button>
            </td>
        </tr>
    `
}

export { cart }
