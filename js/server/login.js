import { login, logout, checkLoginAlert } from '../util/account.js'
import { getParams } from '../util/util.js'

window.onload = async () => {
	const username = getParams('username')
	const password = getParams('password')
	const isLogout = getParams('logout')
	if (isLogout == 'true') {
		logout()
		alert('Đăng xuất thành công !')
		location.assign('/pages/login.html')
	}
	let direction = getParams('direction')
	if (!direction) {
		direction = 'index.html'
	}
	checkLoginAlert()
	if (username && password && (await login(username, password))) {
		location.assign(`/${direction}?loginSuccessfully=true`)
	} else if (username && password) {
		location.assign('/pages/login.html?loginSuccessfully=false')
	}
}
