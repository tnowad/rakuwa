import { getDataFromLocal } from "../util/local-data.js"


const render = async () => {
    let totalPrice = document.querySelector('.content-statistical .left-statistical #turnover')
    let amountProduct = document.querySelector('.content-statistical .center-statistical #amountProduct')
    let amountUser = document.querySelector('.content-statistical .right-statistical #amountUser')
    let { carts, products,users } = await getDataFromLocal()
    let turnover = 0
    carts.map((carts) => turnover += carts.total)
    totalPrice.innerHTML = new Intl.NumberFormat('ja-JP').format(turnover) + " VNĐ"
    amountProduct.innerHTML = products.length + 1
    amountUser.innerHTML = users.length + 1
}

render()

export { render }