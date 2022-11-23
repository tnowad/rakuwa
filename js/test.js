import { getDataFromLocal } from './local-data.js'
import { login, logout, register } from "./account-util.js"
let users = await getDataFromLocal()
console.log(login("admin", "admin"))
// console.log(register({
//     "id": 0,
//     "username": "admin123",
//     "password": "admin",
//     "email": "admin@gov.vn",
//     "address": "Quan 5, Ho Chi Minh, VN",
//     "role": "admin",
//     "dateOfBirth": "10-12-2003",
//     "phoneNumber": "0379713541",
//     "image": ""
// }))
logout()