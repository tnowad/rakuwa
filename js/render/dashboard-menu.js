import { menuRow } from '../template/dashboard-menu-row.js'
import { getCarts } from '../util/cart.js'
import { getDataFromLocal } from '../util/local-data.js'

const render = async () => {
	let totalPrice = document.querySelector(
		'.content-statistical .left-statistical #turnover',
	)
	let amountProduct = document.querySelector(
		'.content-statistical .center-statistical #amountProduct',
	)
	let amountUser = document.querySelector(
		'.content-statistical .right-statistical #amountUser',
	)
	let { carts, products, users } = await getDataFromLocal()
	let turnover = 0
	turnover = carts.reduce(
		(previousValue, currentValue) =>
			previousValue +
			(currentValue.status == 'Thành công' ? currentValue.total : 0),
		0,
	)
	totalPrice.innerHTML =
		new Intl.NumberFormat('ja-JP').format(turnover) + ' VNĐ'
	amountProduct.innerHTML = products.length
	amountUser.innerHTML = users.length
}

const renderForm = async () => {
	const tableDashboardMenu = document.querySelector('.dashboard-table-cart .dashboard-table-user .table-container')
	let carts = await getCarts()
	// carts = await carts.filter((cart) => cart.status == "đang chờ")
	tableDashboardMenu.innerHTML += carts.reduce(
		(previousValue, currentValue) =>
			previousValue + menuRow(currentValue),
		'',
	)

}

render() // statistical
renderForm() //table

export { render,renderForm }
