import { getDataFromLocal } from './local-data.js'
import { getProductById } from './product.js'
import {  loginRequired } from './account.js'
import { createNewId } from './util.js'

const addProductIdToCart = async (productId, quantity) => {
	let { currentCart } = await getDataFromLocal()

	let product =
		currentCart.find((product) => product.id == productId) ||
		(await getProductById(productId))

	if (quantity == undefined) {
		product.quantity = product.quantity ? product.quantity + 1 : 1
		if (product.quantity == 1) alert('Đã thêm sản phẩm vào giỏ hàng!')
	} else {
		product.quantity = quantity
	}

	currentCart = currentCart.filter((product) => product.id != productId)
	currentCart.push(product)
	currentCart.sort((a, b) => a.id - b.id)
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

const getCarts = async (option) => {
	let { carts } = await getDataFromLocal()
	if (option != undefined && option != null) {
		if (option.userId != undefined) {
			carts = carts.filter((cart) => cart.userId == option.userId)
		}
	}
	return carts
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

const payment = async () => {
	await loginRequired()
	let { carts } = await getDataFromLocal()
	let { currentUser } = await getDataFromLocal()
	if (currentUser.address == '') {
		alert('Vui lòng cập nhật địa chỉ')
		return false
	}
	const id = createNewId(carts)
	let currentCart = await getCurrentCart()
	const cart = {
		status: 'Đang chờ',
		id: id,
		userId: currentUser.id,
		time: new Date().toISOString(),
		cart: currentCart,
		total: await getTotalPriceCart(),
		address: currentUser.address,
	}
	if (cart.total == 0) {
		return false
	}
	carts.push(cart)
	cleanCart()
	localStorage.setItem('carts', JSON.stringify(carts))
	return true
}

const updateCart = async (cart) => {
	let { carts } = await getDataFromLocal()
	for (let i = 0; i < carts.length; i++) {
		if (carts[i].id == cart.id) {
			carts[i] = cart
			break
		}
	}
	localStorage.setItem('carts', JSON.stringify(carts))
}

const getCartById = async (cartId) => {
	const { carts } = await getDataFromLocal()
	return carts.find((cart) => cart.id == cartId)
}

const getCartBySearch = async (cartSearch) => {
	let { carts } = await getDataFromLocal()
	return carts.filter((cart) =>
		cart.userId == cartSearch
	)
}

export {
	getCurrentCart,
	cleanCart,
	addProductIdToCart,
	removeProductByIdFromCart,
	getTotalPriceCart,
	getTotalPriceProductIdInCart,
	getTotalQuantityCart,
	payment,
	getCarts,
	updateCart,
	getCartById,
	getCartBySearch,
}
