import { getDataFromLocal } from "../util/local-data.js"


const render = async () => { 
    let totalPrice = document.querySelector('.content-statistical .left-statistical #turnover')
    let amountProduct = document.querySelector('.content-statistical .center-statistical #amountProduct')
    let { carts,products } = await getDataFromLocal()
    let turnover = 0
    carts.map((carts) => turnover += carts.total)
    // console.log(turnover)
    totalPrice.innerHTML = new Intl.NumberFormat('ja-JP').format(turnover) + " VNĐ"
    let amount = 0
    products.map((products) => amount ++)
}

render()

export {render}