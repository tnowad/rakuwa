import { productForm } from './dashboard-product-update-form.js'
const productRow = (product) => {
	return /* html */ `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${product.id}</td>
				<td>${product.title}</td>
				<td><img src="${product.image}" alt=""></td>
				<td>${product.amount}</td>
				<td>${product.price}</td>
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
                    ${productForm(product)}
				</td>
			</tr>
		</tbody>
    `
}
export { productRow }
