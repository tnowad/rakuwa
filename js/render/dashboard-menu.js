import { getDataFromLocal } from "../util/local-data.js"


const render = async () => { 
    let totalPrice = document.querySelector('.content-statistical .left-statistical #turnover')
    let { carts } = await getDataFromLocal()
    let turnover = 0
    carts.map((carts) => turnover += carts.total)
    console.log(turnover)
    totalPrice.innerHTML =  new Intl.NumberFormat('ja-JP').format(turnover) + " VNĐ"
}

render()

export {render}