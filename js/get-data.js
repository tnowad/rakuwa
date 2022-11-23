import { fetchJson } from "./util.js"
/**
 * Get data from server add store local
 * key: users, products, comments, carts
 * type: user {id, username, password, email, address, payment, role, name, dateOfBirth, phoneNumber}
 * type: product {id, title, price, quantity, description, image, rating {rate, count}}
 * type: comment {productId, userId, body}
 * type: cart {id, userId, products[id, quantity, price], amount}
 */

const updateLocalDataFromServer = async () => {
    let users = []
    let products = []
    let comments = []
    let carts = []
    if (!localStorage.getItem('users')) {
        users = await fetchJson('/api/v1/users.json')
        localStorage.setItem('users', JSON.stringify(users))
    }
    if (!localStorage.getItem('products')) {
        products = await fetchJson('/api/v1/products.json')
        localStorage.setItem('products', JSON.stringify(products))
    }
    if (!localStorage.getItem('comments')) {
        comments = await fetchJson('/api/v1/comments.json')
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    if (!localStorage.getItem('carts')) {
        carts = await fetchJson('/api/v1/carts.json')
        localStorage.setItem('carts', JSON.stringify(carts))
    }
}

const getDataFromLocal = () => {
    let users = JSON.parse(localStorage.getItem('users'))
    let products = JSON.parse(localStorage.getItem('products'))
    let comments = JSON.parse(localStorage.getItem('comments'))
    let carts = JSON.parse(localStorage.getItem('carts'))
    return { users, products, comments, carts }
}

let { users, products, comments, carts } = await (async () => {
    await updateLocalDataFromServer()
    return getDataFromLocal()
})()
export {
    users,
    products,
    comments,
    carts
}