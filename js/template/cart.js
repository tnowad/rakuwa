import { addProductIdToCart, removeProductByIdFromCart } from '../util/cart.js'
import { render } from '../render/cart-detail.js'

const updateCart = () => {
    render()
}

const removeProduct = (productId) => {
    if (confirm('Bạn có muốn xóa sản phẩm này?'))
        removeProductByIdFromCart(productId)
}


const cart = (product) => {
    // product.price = product.quantity * product.price
    return /* html */ `
        <tr>
            <td><img src="${product.image}"></td>
            <td>${product.title}</td>
            <td>${new Intl.NumberFormat('ja-JP').format(product.price)}  VND</td>
            <td>
            <input
                type="number"
                min = 1
                max = ${product.amount}
                value = ${product.quantity}
                onchange="
                addProductIdToCart(${product.id}, this.value); updateCart()"
                >
            </td>
            <td> ${new Intl.NumberFormat('ja-JP').format(product.price*product.quantity)} VNĐ</td>
            <td>
                <a
                    class="cart-detail-remove"
                    onclick="removeProduct(${product.id
        }); location.reload()"><i class="fa fa-trash"></i></a>
            </td>
        </tr>
        `
}

window.removeProduct = removeProduct
window.updateCart = updateCart
window.addProductIdToCart = addProductIdToCart

export { cart }
