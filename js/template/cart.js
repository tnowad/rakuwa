import {
	addProductIdToCart,
	removeProductByIdFromCart,
	getCurrentCart,
	getTotalPriceCart,
	getTotalPriceCart,
	cleanCart,
} from '../util/cart.js'

const cart = (item) => {
	const product = document.querySelector('.cart-detail-table tbody')
	product.innerHTML += `
                        <tr>
                            <td>${item.img}</td>
                            <td>${item.title}</td>
                            <td>${item.amount}</td>
                            <td>
                                <span class="price">${item.price}</span>VND
                                <button class="delete">Xoá</button>
                            </td>
                        </tr>        
        `
	return product
}

export { cart }
