import { fetchJson } from '../util/util.js'
/**
 * Get data from server add store local
 * key: users, products, comments, carts
 * type: user {id, username, password, email, address, image, payment, role, name, dateOfBirth, phoneNumber}
 * type: product {id, title, price, quantity, description, image, rating {rate, count}}
 * type: comment {productId, userId, body}
 * type: cart {userId, products[id, quantity, price], amount}
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
    if (!localStorage.getItem('currentUser')) {
        let currentUser = {}
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
    if (!localStorage.getItem('currentCart')) {
        let currentCart = []
        localStorage.setItem('currentCart', JSON.stringify(currentCart))
    }
}
// Use for update data variable
const getDataFromLocal = async () => {
    await updateLocalDataFromServer()
    let users = JSON.parse(localStorage.getItem('users'))
    let products = JSON.parse(localStorage.getItem('products'))
    let comments = JSON.parse(localStorage.getItem('comments'))
    let carts = JSON.parse(localStorage.getItem('carts'))
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let currentCart = JSON.parse(localStorage.getItem('currentCart'))
    return { users, products, comments, carts, currentUser, currentCart }
}
export { updateLocalDataFromServer, getDataFromLocal }
