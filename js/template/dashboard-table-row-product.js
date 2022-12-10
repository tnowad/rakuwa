import { removeProduct } from '../util/product.js'
import { productForm } from './dashboard-product-update-form.js'
const productRow = (product) => {
	return /* html */ `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${product.id}</td>
				<td>${product.title}</td>
				<td><img src="${product.image}" alt=""></td>
				<td>${product.amount}</td>
				<td>${new Intl.NumberFormat('ja-JP').format(product.price)} VNĐ</td>
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
						onclick="deleteProduct(${product.id})"
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

window.deleteProduct = async (productId) => {
	if (confirm('Bạn có muốn xóa sản phẩm này không ?')) {
		await removeProduct(productId)
		alert('Xóa thành công!')
		location.reload()
	}
}

export { productRow }
