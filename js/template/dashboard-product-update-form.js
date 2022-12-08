import {
	getDataFromLocal,
	updateLocalDataFromServer,
} from '../util/local-data.js'
import { getProducts } from '../util/product.js'
const productForm = (product) => {
	return `
		<form class="form-action" action="">
			<div class="group-form-edit edit-name" >
				<label for="">Thay đổi tên</label>
				<input type="text" id="name" value="${product.title}">
			</div>
			<div class="group-form-edit edit-name" >
				<input type="hidden" id="index" value="${product.id}">
			</div>
			<div class="group-form-edit edit-tag">
				<label onclick="updateProduct()" for="">Thay đổi thẻ</label>
				<input type="text" name="" id="category" value="${product.category}">
			</div>
			<div class="group-form-edit edit-picture">
				<label for="">Thay đổi ảnh</label>
				<input type="file" name="" id="" value="${product.image}">
			</div>
			<div class="group-form-edit edit-amount">
				<label for="">Thay đổi số lượng </label>
				<input type="text" name="" id="amount" value="${product.amount}">
			</div>
			<div class="group-form-edit edit price">
					<label for="">Thay đổi giá</label>
					<input type="text" name="" id="price" value="${product.price}">
			</div>
			<div class="edit-describe">
				<label for="">Thay đổi miêu tả</label>
				<input type="text" name="" id="">
			</div>
			<div class="edit-option">
				<button id="cancel">Hủy</button>
				<button id="submit" onclick="${updateProduct(product.id)} ">Hoàn tất</button>				
			</div>
		</form>
    `
}
window.updateProduct = async (product) => {
	// const listProduct = await getProducts()
	// const index = document.getElementById("index").value
	// listProduct[index] = {
	// 	title: document.getElementById("name").value,
	// 	category: document.getElementById("category").value,
	// 	amount: document.getElementById("amount").value,
	// 	price: document.getElementById("price").value
	// }
	// console.log(index)
	// localStorage.setItem('products', JSON.stringify(listProduct))
}

export { productForm }
