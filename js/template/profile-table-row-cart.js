import { cartForm } from '../template/profile-cart-update-form.js'
import { getUsers } from '../util/account.js'
const cartRow = async (cart) => {
	const users = await getUsers({ id: cart.userId })
	const user = users[0]
	return `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${cart.id}</td>
				<td>${user.fullName || user.username}</td>
				<td>${cart.time}</td>
				<td>${cart.total} VNĐ</td>
				<td>${cart.status}</td>
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
						class="fa-duotone fa-eye"
					></button >
				</td>
			</tr>
			<tr>
				<td
					class="table-item-bottom"
					colspan="6"
				>
				${cartForm(cart)}
				</td>
			</tr>
		</tbody>
    `
}
export { cartRow }
