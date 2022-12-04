import { getCurrentCart } from '../util/cart.js'
import { cart as cartHTML } from '../template/cart.js'
const render = async () => {
	const cartBody = document.querySelector('.cart-detail-body')
	const currentCart = await getCurrentCart()
	cartBody.innerHTML = currentCart.reduce((previousValue, currentValue) => {
		return previousValue + cartHTML(currentValue)
	}, '')
}
await render()

export { render }
