import { getCarts } from '../util/cart.js'
import { cartRow } from '../template/dashboard-table-row-cart.js'
const render = async () => {
	const tableDashboardCart = document.querySelector(
		'.content.dashboard-carts .table-container',
	)
	const carts = await getCarts()
	tableDashboardCart.innerHTML += await carts.reduce(
        async (previousValue, currentValue) => previousValue + await cartRow(currentValue),
		'',
        )
}
render()

