import { cartForm } from '../template/dashboard-cart-update-form.js'
import { getUsers } from '../util/account.js'
import { removeCartById } from '../util/cart.js'
const cartRow = async (cart) => {
	const users = await getUsers({ id: cart.userId })
	const user = users[0]
	return `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${cart.id}</td>
				<td>${user.fullName}</td>
				<td>${cart.time}</td>
				<td>${new Intl.NumberFormat('ja-JP').format(cart.total)} VNĐ</td>
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
					<button
						onclick="
							removeCart(${cart.id})
						"
						class="fa fa-trash"
					></button>
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
window.removeCart = async (cartId) => {
	if (confirm('Bạn có muốn xóa đơn hàng này không ?')) {
		await removeCartById(cartId)
		alert('Đã xóa đơn hàng này!')
		location.reload()
	}
}
export { cartRow }
