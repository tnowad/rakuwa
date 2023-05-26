import { loginRequired, checkPermission } from '../util/account.js'
import { getParams, addActive } from '../util/util.js'
window.onload = async () => {
	await loginRequired()
	if (!(await checkPermission())) {
		location.assign('../')
	}
	const page = getParams('page') || 'dashboard-home'
	document
		.querySelectorAll(`.${page}`)
		.forEach((element) => addActive(element))
}
