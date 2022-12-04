import { getCurrentCart, getTotalPriceCart, cleanCart } from '../util/cart.js'
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
							<th><a onclick="removeCart()"><i class="fa-solid fa-eraser"></i></a></th>
						</tr>`
	cartBody.innerHTML += currentCart.reduce((previousValue, currentValue) => {
		return previousValue + cartHTML(currentValue)
	}, '')
	const totalCartPrice = document.querySelector('#total-cart-price')
	totalCartPrice.textContent = `${await getTotalPriceCart()} VNĐ`
}

const removeCart = () => {
	if (confirm('Bạn có muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
		cleanCart()
		render()
	}
}

window.removeCart = removeCart

await render()

export { render }
