import { checkLogin, checkPermission } from '../util/account.js'
const render = async () => {
	let userMenu = document.querySelector('.user-menu.dropdown-content')
	const loginStatus = await checkLogin()
	if (loginStatus) {
		userMenu.innerHTML = /* html */ `
            <li><a href="/pages/profile.html">Thông tin cá nhân</a></li>
            ${
				(await checkPermission())
					? '<li><a href="/pages/dashboard.html">Quản lý website</a></li>'
					: ''
			}
            <li><a href="/pages/login.html?logout=true">Đăng xuất</a></li>
        `
	}
}

render()
