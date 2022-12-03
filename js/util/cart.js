import { getDataFromLocal } from './local-data.js'
import { getProductById } from './product.js'

const addProductIdToCart = async (productId, quantity) => {
	let { currentCart } = await getDataFromLocal()

	let product =
		currentCart.find((product) => product.id == productId) ||
		(await getProductById(productId))

	if (quantity == undefined) {
		product.quantity = product.quantity ? product.quantity + 1 : 1
	} else {
		product.quantity = quantity
	}

	currentCart = currentCart.filter((product) => product.id != productId)
	currentCart.push(product)
	localStorage.setItem('currentCart', JSON.stringify(currentCart))
	console.log(await getTotalPriceCart())
}

const removeProductByIdFromCart = async (productId) => {
	let { currentCart } = await getDataFromLocal()
	currentCart = currentCart.filter((product) => product.id != productId)
	localStorage.setItem('currentCart', JSON.stringify(currentCart))
}

const getCurrentCart = async () => {
	let { currentCart } = await getDataFromLocal()
	return currentCart
}

const getTotalPriceProductIdInCart = async (productId) => {
	const product = await getProductById(productId)
	return product.price * product.quantity || 0
}

const getTotalPriceCart = async () => {
	const { currentCart } = await getDataFromLocal()
	return currentCart.reduce((previousValue, currentValue) => {
		return previousValue + currentValue.price * currentValue.quantity
	}, 0)
}
const getTotalQuantityCart = async () => {
	const { currentCart } = await getDataFromLocal()
	return currentCart.reduce((previousValue, currentValue) => {
		return previousValue + currentValue.quantity
	}, 0)
}

const cleanCart = async () => {
	let { currentCart } = await getDataFromLocal()
	currentCart = []
	localStorage.setItem('currentCart', JSON.stringify(currentCart))
}

export {
	getCurrentCart,
	cleanCart,
	addProductIdToCart,
	removeProductByIdFromCart,
	getTotalPriceCart,
	getTotalPriceProductIdInCart,
	getTotalQuantityCart,
}
