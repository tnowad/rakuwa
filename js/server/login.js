import { login, checkLoginAlert } from '../util/account.js'
import { getParams } from '../util/util.js'

window.onload = async () => {
    const username = getParams('username')
    const password = getParams('password')
    let direction = getParams('direction')
    if (!direction) {
        direction = 'index.html'
    }
    checkLoginAlert()
    if (username && password && await login(username, password)) {
        location.assign(`/${direction}?loginSuccessfully=true`)
    } else if (username && password) {
        location.assign('/pages/login.html?loginSuccessfully=false')
    }
}