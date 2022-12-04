import {
	getCurrentCart,
	getTotalPriceCart,
	cleanCart,
	payment,
} from '../util/cart.js'
import { cart as cartHTML } from '../template/cart.js'
import { loginRequired } from '../util/account.js'
const render = async () => {
	await loginRequired()
	const cartBody = document.querySelector('.cart-detail-body')
	const currentCart = await getCurrentCart()
	cartBody.innerHTML = /* html */ `<tr>
							<th class="group-form group-form-image">
								Hình ảnh
							</th>
							<th class="group-form group-form-name">
								Tên sản phẩm
							</th>
							<th class="group-form group-form-price">Giá</th>
							<th class="group-form group-form-amount">
								Số lượng
							</th>
							<th class="group-form group-form-price">
								Tổng tiền
							</th>
							<th><a class="cart-detail-remove" onclick="removeCart()"><i class="fa-solid fa-eraser"></i></a></th>
						</tr>`
	cartBody.innerHTML += currentCart.reduce((previousValue, currentValue) => {
		return previousValue + cartHTML(currentValue)
	}, '')
	const totalCartPrice = document.querySelector('#total-cart-price')
	totalCartPrice.textContent = `${await getTotalPriceCart()} VNĐ`
	const btnPayment = document.querySelector('#btn-payment')
	btnPayment.addEventListener('click', () => {
		paymentBill()
	})
}
const removeCart = () => {
	if (confirm('Bạn có muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
		cleanCart()
		render()
	}
}

const paymentBill = async () => {
	if (confirm('Bạn có muốn thanh toán không?')) {
		if (await payment()) {
			alert('Thanh toán thành công!')
			render()
		} else {
			alert('Thanh toán thất bại!')
		}
	}
}

window.payment = payment
window.removeCart = removeCart

await render()

export { render }
