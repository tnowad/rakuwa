import { renderHTML, getParams } from '../util/util.js'
import { commentRow, productDetail } from '../template/product-detail.js'
import { getProductById } from '../util/product.js'
import { addProductIdToCart } from '../util/cart.js'
import { getDataFromLocal } from '../util/local-data.js'


const render = async () => {
	let productId = getParams('id')
	const product = await getProductById(productId)

	let productDetailsTop = document.querySelector('.product-details-top')
	console.log('run')
	renderHTML(productDetailsTop, productDetail(product))
}

const renderComments = async () => {
    const commentsTable = document.querySelector('.product-comments')
	let { comments } = await getDataFromLocal()
	commentsTable.innerHTML += await comments.reduce( async (previousValue, currentValue) => {
		previousValue = await previousValue
		console.log(currentValue)
		return previousValue +  commentRow(currentValue)
	},
		Promise.resolve(''),
	)
}

render()
renderComments()

window.addProductIdToCart = addProductIdToCart
