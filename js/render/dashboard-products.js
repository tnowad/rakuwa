import { getProducts } from '../util/product.js'
import { productRow } from '../template/dashboard-table-row-product.js'
const render = async () => {
	const tableDashboardProduct = document.querySelector(
		'.content.dashboard-products .table-container',
	)
	const products = await getProducts()
	tableDashboardProduct.innerHTML += products.reduce(
		(previousValue, currentValue) =>
			previousValue + productRow(currentValue),
		'',
	)
}
render()
