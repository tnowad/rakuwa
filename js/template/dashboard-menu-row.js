import { getUsers } from '../util/account.js'
import { productRow } from './profile-cart-update-form.js'

const menuRowUser = async (cart) => {
	const users = await getUsers({ id: cart.userId })
	const user = users[0]

	return `
		<div class="dashboard-receipt" >
			<table
				style="width: 100%; text-align: center"
				class="table-container"
			>
				<thead class="table-head">
					<tr>
						<th style="width: 5%">Id</th>
						<th style="width: 35%">
							Tên người mua
						</th>
						<th style="width: 15%">
							Thời gian
						</th>
						<th style="width: 15%">
							Tổng tiền
						</th>
						<th style="width: 15%">
							Trạng thái
						</th>
						<th style="width: 15%">
							Hành động
						</th>
					</tr>
				</thead>
				<tbody class="table-item">
					<tr class="table-item-top">
						<td>${user.id}</td>
						<td>${user.fullName}</td>
						<td>${cart.time}</td>
						<td>${new Intl.NumberFormat('ja-JP').format(cart.total)}</td>
						<td>${cart.status}</td>
						<td>
							<button onclick="
										this
											.parentElement
											.parentElement
											.parentElement
											.querySelector('.table-item-bottom')
											.classList
											.toggle('active')" class="fas fa-edit"></button>
							<button onclick="" class="fa fa-trash"></button>
						</td>
					</tr>
					<tr>
						<td class="table-item-bottom" colspan="6">

						</td>
					</tr>
				</tbody>
			</table>
			<div class="dashboard-table dashboard-table-product">
				<table style="width: 100%; text-align: center" class="table-container">
					<thead class="table-head">
						<tr>
							<th style="width: 10%">Id</th>
							<th style="width: 35%">
								Tên sản phẩm
							</th>
							<th style="width: 25%">Hình ảnh</th>
							<th style="width: 15%">Số lượng</th>
							<th style="width: 20%">Giá</th>
						</tr>
					</thead>
					${cart.cart.reduce((previousValue, currentValue) => {
						return previousValue + productRow(currentValue)
					}, '')}
				</table>
			</div>
		</div>


			
    `
}

export { menuRowUser }
