import { loginRequired, checkPermission } from '../util/account.js'
window.onload = async () => {
	await loginRequired()
	if (!(await checkPermission())) {
		location.assign('/')
	}
}
