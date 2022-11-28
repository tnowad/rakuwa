import { renderHTML, getParams } from '../util/util.js'
import { productDetail } from '../template/product-detail.js'
import { getProductById } from '../util/product.js'
import { addProductIdToCart } from '../util/cart.js'

const render = async () => {
	let productId = getParams('id')
	const product = await getProductById(productId)

	let productDetailsTop = document.querySelector('.product-details-top')
	renderHTML(productDetailsTop, productDetail(product))
}

render()

window.addProductIdToCart = addProductIdToCart
