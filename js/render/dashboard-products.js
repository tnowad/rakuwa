import { getCategories, getProducts } from '../util/product.js'
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
const renderCategory = async () => {
	const categories = Object.keys(await getCategories())
	const categoryData = document.querySelectorAll('#category-list')
	categoryData.forEach((element) => {
		element.innerHTML += categories.reduce(
			(previousValue, currentValue) => {
				return previousValue + `<option>${currentValue}</option>`
			},
		)
	})
}
const renderSearch = async (productSearch) => {
	const tableDashboardProducts = document.querySelector(
		'.content.dashboard-products .table-container',
	)
	tableDashboardProducts.innerHTML = `
				<thead class="table-head">
									<tr>
										<th style="width: 5%">Id</th>
										<th style="width: 35%">
											Tên sản phẩm
										</th>
										<th style="width: 15%">Hình ảnh</th>
										<th style="width: 15%">Số lượng</th>
										<th style="width: 15%">Giá</th>
										<th style="width: 15%">
											Hành động
										</th>
									</tr>
								</thead>
	`
	tableDashboardProducts.innerHTML += productSearch.reduce(
		(previousValues, currentValues) =>
			previousValues + productRow(currentValues),
		'',
	)
}



await render()
renderCategory()
export { render, renderSearch }
