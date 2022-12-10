import { getUsers } from '../util/account.js'
import { userRow } from '../template/dashboard-table-row-user.js'
const render = async () => {
	const tableDashboardUser = document.querySelector(
		'.content.dashboard-users .table-container',
	)
	let users = await getUsers()

	users = users.filter((user) => user.status != 'deleted')

	tableDashboardUser.innerHTML += users.reduce(
		(previousValue, currentValue) => previousValue + userRow(currentValue),
		'',
	)
}

const renderSearch = async (array) => {
	const tableDashboardUsers = document.querySelector(
		'.content.dashboard-users .table-container',
	)
	tableDashboardUsers.innerHTML = `
								<thead class="table-head">
									<tr>
										<th style="width: 5%">Id</th>
										<th style="width: 35%">
											Tên người dùng
										</th>
										<th style="width: 15%">Hình ảnh</th>
										<th style="width: 15%">Email</th>
										<th style="width: 15%">
											Trạng thái
										</th>
										<th style="width: 15%">
											Hành động
										</th>
									</tr>
								</thead>`
	tableDashboardUsers.innerHTML += array.reduce(
		(previousValues, currentValues) =>
			previousValues + userRow(currentValues),
		'',
	)
}
render()
export { render, renderSearch }
