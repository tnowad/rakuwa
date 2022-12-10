import { getUserById, removeUser, updateUser } from '../util/user.js'
import { userForm } from './dashboard-user-update-form.js'

const userRow = (user) => {
	return /* html */ `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${user.id}</td>
				<td>${user.fullName}</td>
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
						onclick="removeUser(${user.id})"
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
window.removeUser = async (userId) => {
	let user = await getUserById(userId)
	if (user.status != 'deleted') {
		if (confirm('Bạn có muốn xóa người dùng này không ?')) {
			user = {
				...user,
				status: 'deleted',
			}
			await updateUser(user)
		}
	} else {
		if (confirm('Bạn có muốn xóa người dùng này vĩnh viễn không ?')) {
			await removeUser(user.id)
		}
	}
	location.reload()
}
export { userRow }
