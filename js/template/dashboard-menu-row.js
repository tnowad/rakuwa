import { getUserById } from "../util/user.js"

const menuRow = async (cart) => {
    let user = await getUserById(cart.userId)
    console.log(user)

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
    `
}

export { menuRow }
