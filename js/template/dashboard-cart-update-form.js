import { getCartById, updateCart } from '../util/cart.js'
const productRow = (product) => {
	return `
        <tbody class="table-item">
			<tr class="table-item-top" style="text-align: center;">
				<td>${product.id}</td>
				<td>${product.title}</td>
				<td><img src="${product.image}" alt=""></td>
				<td>${product.quantity}</td>
				<td>${product.quantity * product.price} VNĐ</td>
			</tr>
		</tbody>`
}
const cartForm = (cart) => {
	return /* html */ `
        <a style="text-align:start;">Danh sách sản phẩm</a>
        <table style="width:100%;">
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
            ${cart.cart.reduce((previousValue, currentValue) => {
				return previousValue + productRow(currentValue)
			}, '')}
        </table>
		<form onsubmit="return false">
			<div class="group-form-edit edit-status">
				<label for="">Trạng thái đơn hàng</label>
				<select type="text" name="" id="status" value="${
					cart.status
				} selected disabled hidden">
					<option value="Thành công">Thành công</option>
					<option value="Thất bại">Thất bại</option>
					<option value="Đang chờ">Đang chờ</option>
				</select>
			</div>
			<div class="edit-option">
				<button id="cancel" onclick="">Hủy</button>
				<button id="submit" onclick="updateCart(this.parentElement.parentElement, ${
					cart.id
				})" >Hoàn tất</button>
			</div>
		</form>
    `
}
window.updateCart = async (form, cartId) => {
	let cart = await getCartById(cartId)
	cart = {
		...cart,
		status: form.querySelector('#status').value,
	}
	console.log(cart)
	updateCart(cart)
	location.reload()
}

export { cartForm }
