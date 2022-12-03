import { getTotalPriceCart } from '../util/cart.js'

const totalPrice = document.querySelector('#auto-update-cart-price')

setInterval(async () => {
	totalPrice.textContent = await getTotalPriceCart()
}, 500)
