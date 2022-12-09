import { userForm } from './dashboard-user-update-form.js'
import { searchUser } from '../util/user.js'
import {renderSearch,render} from '../render/dashboard-users.js'
const userRow = (user) => {
	return /* html */ `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${user.id}</td>
				<td>${user.username}</td>
				<td><img src="${user.image}" alt=""></td>
				<td>${user.email}</td>
				<td>${user.status}</td>
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
							class="fa-solid fa-ban"
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
                    ${userForm(user)}
				</td>
			</tr>
		</tbody>
    `
}

window.searchUser = async () => {
	let valueSearchUser = document.querySelector('.form-search-user input').value
	let userSearch = await searchUser(valueSearchUser)
	renderSearch(userSearch)
	console.log(userSearch)
}
export { userRow }
