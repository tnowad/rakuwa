import { getCarts } from '../util/cart.js'
import { cartRow } from '../template/dashboard-table-row-cart.js'
const render = async () => {
	const tableDashboardCart = document.querySelector(
		'.content.dashboard-carts .table-container',
	)
	tableDashboardCart.innerHTML = `
		<thead class="table-head">
										<tr>
											<th style="width: 5%">Id</th>
											<th style="width: 35%">
												Tên người mua
											</th>
											<th style="width: 15%">
												Thời gian
											</th>
											<th style="width: 15%">
												Tổng tiền
											</th>
											<th style="width: 15%">
												Trạng thái
											</th>
											<th style="width: 15%">
												Hành động
											</th>
										</tr>
									</thead>`
	const carts = await getCarts()
	tableDashboardCart.innerHTML += await carts.reduce(
		async (previousValue, currentValue) => {
			previousValue = await previousValue
			return previousValue + (await cartRow(currentValue))
		},
		Promise.resolve(''),
	)
}

const renderSearch = async (cartSearch) => { 
	const tableDashboardCart = document.querySelector(
        '.content.dashboard-carts .table-container',
	)
	tableDashboardCart.innerHTML = `
	<thead class="table-head">
										<tr>
											<th style="width: 5%">Id</th>
											<th style="width: 35%">
												Tên người mua
											</th>
											<th style="width: 15%">
												Thời gian
											</th>
											<th style="width: 15%">
												Tổng tiền
											</th>
											<th style="width: 15%">
												Trạng thái
											</th>
											<th style="width: 15%">
												Hành động
											</th>
										</tr>
									</thead>
									`
	tableDashboardCart.innerHTML += await cartSearch.reduce(
		async (previousValue, currentValue) => {
			previousValue = await previousValue
			return previousValue + (await cartRow(currentValue))
		},
		Promise.resolve(''),
	)
}
render()
export{ render, renderSearch}
