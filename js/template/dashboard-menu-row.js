import { getUsers } from '../util/account.js'

const menuRowUser = async (cart) => {
    const users = await getUsers({ id: cart.userId })
    const user = users[0]
    console.log(cart.cart)
    return `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${user.id}</td>
				<td>${user.fullName}</td>
				<td><img src="${user.image}" alt=""></td>
				<td>${user.email}</td>
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
						class="fas fa-edit"
					></button>
						<button
						onclick=""
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

        <div class="dashboard-table dashboard-table-product">
								<table style="width: 100%; text-align: center" class="table-container">
									<thead class="table-head">
										<tr>
											<th style="width: 5%">Id</th>
											<th style="width: 35%">
												Tên sản phẩm
											</th>
											<th style="width: 15%">Hình ảnh</th>
											<th style="width: 15%">Số lượng</th>
											<th style="width: 15%">Giá</th>
										</tr>
									</thead>
                                    
                                          <tbody class="table-item">
			<tr class="table-item-top">
				<td>${cart.id}</td>
				<td>${cart.cart.title}</td>
				<td><img src="${cart.cart.image}" alt=""></td>
				<td>${cart.cart.amount}</td>
				<td>${new Intl.NumberFormat('ja-JP').format(cart.cart.price)} VNĐ</td>
			</tr>
		</tbody>   


								</table>
        </div>
    `
}

const menuRowProduct = async (cart) => {
    return `
         <tbody class="table-item">
			<tr class="table-item-top">
				<td>${cart.id}</td>
				<td>${cart.cart.title}</td>
				<td><img src="${cart.cart.image}" alt=""></td>
				<td>${cart.cart.amount}</td>
				<td>${new Intl.NumberFormat('ja-JP').format(cart.cart.price)} VNĐ</td>
			</tr>
		</tbody>        
    `
}

export { menuRowUser }
