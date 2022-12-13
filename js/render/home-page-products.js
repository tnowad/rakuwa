import { getParams, renderHTML } from '../util/util.js'
import { getProducts } from '../util/product.js'
import { addProductIdToCart } from '../util/cart.js'
import { productCart } from '../template/product-card.js'
import { pagination as productPaginationHTML } from '../template/pagination.js'

const shopArea = document.querySelector('.product-area')

const renderShopArea = async () => {
	const category = getParams('category')
	const price = {
		low: parseInt(getParams('priceLow')) || 0,
		high: parseInt(getParams('priceHigh')) || 999999999,
	}
	// todo: use in search encodeURIComponent()
	const name = getParams('name')

	const option = {
		category: category,
		price: price,
		name: name,
	}
	if (option.category != null || option.name != null) {
		document.querySelector('.slideshow-banners').style.display = 'none'
		document.querySelector('.offer-banners-area').style.display = 'none'
	}
	console.log(option)
	let products = await getProducts(option)
	const productPagination = document.querySelector('.product-pagination')

	const currentPage = getParams('page') ? getParams('page') : 1
	const maxPage = products.length / 12
	for (let i = (currentPage - 1) * 12; i < 12 * currentPage; i++) {
		if (products[i]) {
			renderHTML(shopArea, productCart(products[i]))
		}
	}
	renderHTML(
		productPagination,
		productPaginationHTML(Math.ceil(maxPage), currentPage),
	)
}
renderShopArea()

window.addProductIdToCart = addProductIdToCart
