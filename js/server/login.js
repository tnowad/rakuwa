import { login } from '../util/account.js'
import { getParams } from '../util/util.js'

window.onload = () => {
    const username = getParams('username')
    const password = getParams('password')
    if (username && password && login(username, password)) {
        location.assign('/')
    } else if (username && password) {
        location.assign('/pages/login.html')
    }
}