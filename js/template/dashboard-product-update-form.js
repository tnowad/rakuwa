import { getProductById, getProducts, updateProduct } from '../util/product.js'
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
				<input type="file" name="" id="" value="${product.image}">
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
				<textarea id="description" name="w3review" rows="4" cols="50">${product.description}</textarea>
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
		description : form.querySelector('#description').value
	}
	console.log(product)
	updateProduct(product)
	location.reload()
}

export { productForm }
