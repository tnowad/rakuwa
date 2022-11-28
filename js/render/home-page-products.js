import { getParams, renderHTML } from '../util/util.js'
import { getProducts } from '../util/product.js'
import { addProductIdToCart } from '../util/cart.js'
import { productCart } from '../template/product-card.js'

const productPaginationHTML = (maxPage, currentPage) => {
	let html = ''
	for (let i = 1; i <= maxPage; i++) {
		if (i != currentPage) {
			html += `<li class="page-item"><a href="?page=${i}">${i}</a></li>`
		} else {
			html += `<li class="page-item active"><a href="?page=${i}">${i}</a></li>`
		}
	}
	if (currentPage == 1) {
		html =
			`<li class="page-item"><a><i class="fas fa-chevron-left"></i></a></li>` +
			html
		html += `<li class="page-item"><a href="?page=${
			parseInt(currentPage) + 1
		}"><i class="fas fa-chevron-right"></i></a></li>`
	} else if (currentPage == maxPage) {
		html =
			`<li class="page-item"><a href="?page=${
				parseInt(currentPage) - 1
			}"><i class="fas fa-chevron-left"></i></a></li>` + html
		html += `<li class="page-item"><a"><i class="fas fa-chevron-right"></i></a></li>`
	} else {
		html =
			`<li class="page-item"><a href="?page=${
				parseInt(currentPage) - 1
			}"><i class="fas fa-chevron-left"></i></a></li>` + html
		html += `<li class="page-item"><a href="?page=${
			parseInt(currentPage) + 1
		}"><i class="fas fa-chevron-right"></i></a></li>`
	}
	return html
}

let productItemArray = []
const shopArea = document.querySelector('.product-area')

const renderShopArea = async () => {
	const category = getParams('category')
	const price = {
		low: parseInt(getParams('priceLow')) || 0,
		high: parseInt(getParams('priceHigh')) || 999999999,
	}
	// todo: use in search encodeURIComponent()
	const name = decodeURIComponent(getParams('name'))

	let products = await getProducts({
		category: category,
		price: price,
		name: name,
	})
	const productPagination = document.querySelector('.product-pagination')

	const currentPage = getParams('page') ? getParams('page') : 1
	const maxPage = products.length / 12
	for (let i = (currentPage - 1) * 12; i < 12 * currentPage; i++) {
		if (products[i]) {
			renderHTML(shopArea, productCart(products[i]))
			productItemArray.push(products[i])
		}
	}
	renderHTML(
		productPagination,
		productPaginationHTML(Math.ceil(maxPage), currentPage)
	)
}
renderShopArea()

window.addProductIdToCart = addProductIdToCart
