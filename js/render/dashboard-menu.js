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
	// carts.map((carts) => (turnover += carts.total))
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

render()

export { render }
