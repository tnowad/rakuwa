import { getUsers } from '../util/account.js'
import { userRow } from '../template/dashboard-table-row-user.js'
const render = async () => {
	const tableDashboardUser = document.querySelector(
		'.content.dashboard-users .table-container',
	)
	const users = await getUsers()
	tableDashboardUser.innerHTML += users.reduce(
		(previousValue, currentValue) => previousValue + userRow(currentValue),
		'',
	)
}
render()
