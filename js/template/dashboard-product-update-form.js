import { getDataFromLocal, updateLocalDataFromServer } from "../util/local-data.js"
const productForm = (product) => {
	return `
    <form class="form-action" action="">
				<div class="group-form-edit edit-name" >
					<label for="">Thay đổi tên</label>
					<input type="text" value="${product.title}">
				</div>
				<div class="group-form-edit edit-tag">
					<label for="">Thay đổi thẻ</label>
					<input type="text" name="" id="" value="${product.category}">
				</div>
				<div class="group-form-edit edit-picture">
				<label for="">Thay đổi ảnh</label>
				<input type="file" name="" id="" value="${product.image}">
				</div>
				<div class="group-form-edit edit-amount">
					<label for="">Thay đổi số lượng </label>
					<input type="text" name="" id="" value="${product.amount}">
				</div>
				<div class="group-form-edit edit price">
					<label for="">Thay đổi giá</label>
					<input type="text" name="" id="" value="${product.price}">
				</div>
			<div class="edit-describe">
				<label for="">Thay đổi miêu tả</label>
				<input type="text" name="" id="">
			</div>
			<div class="edit-option">
				<button id="submit" onclick="updateProduct()">Hoàn tất</button>				
				<button id="cancel">Hủy</button>
			</div>
		</form>
    `
}
window.updateProduct = () => {
	// console.log(54)
	
}

export { productForm }
