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

const renderSearch = async (array) => { 
	const tableDashboardUsers = document.querySelector(
		'.content.dashboard-users .table-container',
	)
	console.log(tableDashboardUsers)
	tableDashboardUsers.innerHTML += array.reduce(
		(previousValues, currentValues) => previousValues + userRow(currentValues),
		'',
	)
}
render()
export { render,renderSearch }
