import {getParams} from '../util/util.js'
import { register} from '../util/account.js'


window.onload = async  () => {
    const phone = getParams('phone')
    const fullName = getParams('fullName')
    const email = getParams('email')
    const username = getParams('username')
    const password = getParams('password')
    const confirmPassword = getParams('confirm-password')


    const user = {
		"id": 0,
		"username": username,
		"fullName": fullName,
		"password": password,
		"email": email,
		"address": "",
		"role": "user",
		"dateOfBirth": "",
		"phoneNumber": phone,
		"image": "",
		"status": "active"
    }
    if(
        username && 
        password &&
        confirmPassword &&
        (password == confirmPassword) &&
        await register(user)  
    ){
        alert("Đăng kí thành công")
         location.assign('/pages/login.html?loginSuccessfully=true')
    }
}
