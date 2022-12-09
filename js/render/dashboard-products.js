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
render()

export { render, renderSearch }
