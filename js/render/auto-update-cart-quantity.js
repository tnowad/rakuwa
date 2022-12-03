import { getTotalQuantityCart } from '../util/cart.js'

const totalQuantity = document.querySelector('#auto-update-cart-quantity')

setInterval(async () => {
	totalQuantity.textContent = await getTotalQuantityCart()
}, 500)
