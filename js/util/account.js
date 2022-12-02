import { getDataFromLocal } from '../util/local-data.js'
import { getParams } from './util.js'
const login = async (username, password) => {
	let { users } = await getDataFromLocal()
	const currentUser = users.filter(
		(user) => user.username == username && user.password == password,
	)
	if (currentUser.length > 0) {
		localStorage.setItem('currentUser', JSON.stringify(currentUser[0]))
		return true
	}
	return false
}

const updateUser = async (user) => {
	let { users } = await getDataFromLocal()
	for (const i = 0; i < users.length; i++) {
		if (users[i].id == user.id) {
			users[i] = user
			break
		}
	}
	localStorage.setItem('products', JSON.stringify(products))
}

const logout = () => {
	localStorage.setItem('currentUser', '{}')
}

const isUsernameValid = async (username) => {
	let { users } = await getDataFromLocal()
	const usernameRegex = /^[a-z0-9_.]+$/
	if (!usernameRegex.test(username)) {
		return false
	}
	if (users.map((user) => user.username).includes(username)) {
		return false
	}
	return true
}

const idPasswordValid = (password) => {
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
	return passwordRegex.test(password)
}

const register = async (user) => {
	let { users } = await getDataFromLocal()
	if (!(await isUsernameValid(user.username))) {
		return false
	} else {
		
		users.push(user)
		localStorage.setItem('users', JSON.stringify(users))
		return true
	}
}

const getUsers = (options) => {
	if (options != undefined) {
		if (options.id != null) {
			// todo filter data
		}
	}
}

const checkLoginAlert = () => {
	const loginSuccessfully = getParams('loginSuccessfully')
	if (loginSuccessfully == 'false') {
		alert('Đăng nhập thất bại!')
	} else if (loginSuccessfully == 'true') {
		alert('Đăng nhập thành công!')
	}
}

const loginRequired = async () => {
	const { currentUser } = await getDataFromLocal()
	if (currentUser.id == undefined) {
		alert('Bạn chưa đăng nhập!')
		location.assign('/pages/login.html')
	}
}

const checkLogin = async () => {
	// const { currentUser } = await getDataFromLocal()
	return localStorage.getItem('currentUser') != '{}'
}

const checkPermission = async () => {
	const { currentUser } = await getDataFromLocal()
	return currentUser.role == 'admin'
}

const getStatusUser = async (userId) => {
	const { users } = await getUsers()
	return users.find((user) => user.id == userId).status || 'deleted'
}

export {
	login,
	register,
	isUsernameValid,
	idPasswordValid,
	updateUser,
	logout,
	getUsers,
	checkLoginAlert,
	loginRequired,
	checkLogin,
	checkPermission,
	getStatusUser,
}
