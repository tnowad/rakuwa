import { fetchJson } from "./util"
/**
 * Get data from server add store local
 * key: users, products, comments, cart
 * type: user {id, username, password, email, address, payment, role, name, dateOfBirth, phoneNumber}
 * type: product {id, title, price, quantity, description, image, rating {rate, count}}
 * type: comment {productId, userId, body}
 */

const updateDataFromServer = () => {
    if (localStorage.getItem('users')) {

    }
}