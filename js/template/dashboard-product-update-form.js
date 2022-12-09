import { getProductById, getProductByName, updateProduct } from '../util/product.js'
import { convertBase64 } from '../util/file-to-base64.js'
import { renderSearch } from '../render/dashboard-products.js'
const productForm = (product) => {
	return `
		<form class="form-action" onsubmit="return false">
			<div class="group-form-edit edit-name" >
				<label for="">Tên sản phẩm</label>
				<input type="text" id="title" value="${product.title}">
			</div>
			<div class="group-form-edit edit-tag">
				<label  for="">Thẻ</label>
				<input type="text" name="" id="category" value="${product.category}">
			</div>
			<div class="group-form-edit edit-picture">
				<label for="">Ảnh</label>
				<input type="file" name="" id="image" value="${product.image}">
			</div>
			<div class="group-form-edit edit-amount">
				<label for="">Số lượng </label>
				<input type="text" name="" id="amount" value="${product.amount}">
			</div>
			<div class="group-form-edit edit price">
					<label for="">Giá</label>
					<input type="text" name="" id="price" value="${product.price}">
			</div>
			<div class="edit-describe">
				<label for="">Miêu tả</label>
				<textarea id="description" rows="4" cols="50">${product.description}</textarea>
				</div>
			<div class="edit-option">
				<button id="cancel">Hủy</button>
				<button id="submit" onclick="updateProduct(this.parentElement.parentElement, ${product.id})" >Hoàn tất</button>
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
	updateProduct(product)
}

window.searchProduct = async () => {
	let valueSearchProduct = document.querySelector('.form-search-product input').value
	renderSearch( await getProductByName(valueSearchProduct))
}

export { productForm }
