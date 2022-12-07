// import { getDataFromLocal, updateLocalDataFromServer } from "../util/local-data"
import { getUsers } from '../util/account.js'
const cartRow = async (cart) => {
	const users = await getUsers({ id: cart.userId })
	const user = users[0]
	console.log(cart.total)
	return `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${cart.id}</td>
				<td>${user.fullName}</td>
				<td>${cart.time}</td>
				<td>${cart.total}</td>
				<td>Thành công</td>
				<td>
					<button
						onclick="
							this
								.parentElement
								.parentElement
								.parentElement
								.querySelector('.table-item-bottom')
								.classList
								.toggle('active')"
						class="fas fa-edit"
					></button>
					<button
						class="fa fa-trash"
					></button>
				</td>
			</tr>
			<tr>
				<td
					class="table-item-bottom"
					colspan="6"
				>
				</td>
			</tr>
		</tbody>
    `
}
export { cartRow }
