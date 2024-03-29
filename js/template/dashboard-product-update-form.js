import {
	getProductById,
	getProductBySearch,
	updateProduct,
} from '../util/product.js'
import { convertBase64 } from '../util/file-to-base64.js'
import { renderSearch } from '../render/dashboard-products.js'
const productForm = (product) => {
	return `
		<form class="form-action" onsubmit="return false">
			<div class="group-form-option edit-name" >
				<label for="">Tên sản phẩm</label>
				<input type="text" id="title" value="${product.title} " required>
			</div>
			<div class="group-form-option edit-tag">
				<label  for="">Thẻ</label>
				<input type="text" name="" list="category-list" id="category" value="${product.category}" required>
				<datalist id="category-list">
			</div>
			<div class="group-form-option edit-picture">
				<label for="">Ảnh</label>
				<input type="file" name="" id="image" value="${product.image}">
			</div>
			<div class="group-form-option edit-amount">
				<label for="">Số lượng </label>
				<input type="text" name="" id="amount" value="${product.amount}" required>
			</div>
			<div class="group-form-option edit price">
					<label for="">Giá</label>
					<input type="text" name="" id="price" value="${product.price}" required>
			</div>
			<div class="group-form-option edit-describe">
				<label for="">Miêu tả</label>
				<textarea id="description" rows="4" cols="50" required>${product.description}</textarea>
				</div>
			<div class="group-form-option edit-option">
				<button id="submit" onclick="updateProduct(this.parentElement.parentElement, ${product.id})" >Lưu thay đổi</button>
			</div>
		</form>
    `
}

window.updateProduct = async (form, productId) => {
	let product = await getProductById(productId)
	product = {
		...product,
		title: form.querySelector('#title').value,
		category: form.querySelector('#category').value,
		amount: form.querySelector('#amount').value,
		price: form.querySelector('#price').value,
		description: form.querySelector('#description').value,
	}
	try {
		product = {
			...product,
			image: await convertBase64(form.querySelector('#image').files[0]),
		}
	} catch {}

	if (
		product.title == "" ||
		product.category == "" ||
		product.amount == 0 ||
		product.price == 0 ||
        product.description == "" ||
        product.image == null
	) {
        alert('Không được để trống!')
        return
	} else {
		updateProduct(product)
		location.reload()
	}

}

window.searchProduct = async () => {
	let valueSearchProduct = document.querySelector(
		'.form-search-product input',
	).value
	renderSearch(await getProductBySearch(valueSearchProduct))
}

export { productForm }
