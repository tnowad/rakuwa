import { getTotalPriceProductIdInCart } from '../util/cart.js'

const cart = (product) => {
	return /* html */ `
        <tr>
            <form action="" method="post">

                <td><img src="${product.image}"></td>
                <td>${product.title}</td>
                <td>${product.price} VND</td>
                <td>
                <input
                    type="number"
                    name=""
                    id=""
                    placeholder =${product.quantity}>
            </td>
            <td>${product.quantity * product.price}</td>
            <td>
                <button class="delete"><i class="fas fa-x"></i></button>

            </td>
            </form>
        </tr>
    `
}

export { cart }
