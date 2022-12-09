import { getCarts } from '../util/cart.js'
import { cartRow } from '../template/profile-table-row-cart.js'
import { getDataFromLocal } from '../util/local-data.js'
const render = async () => {
	const { currentUser } = await getDataFromLocal()
	const tableDashboardCart = document.querySelector('.table-container')
	const carts = await getCarts({ userId: currentUser.id })
	tableDashboardCart.innerHTML += await carts.reduce(
		async (previousValue, currentValue) => {
			previousValue = await previousValue
			return previousValue + (await cartRow(currentValue))
		},
		Promise.resolve(''),
	)
}
render()
export { render }
