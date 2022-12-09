import { getDataFromLocal } from './local-data.js'
import { removeVietnameseTones } from './util.js'

const getUserById = async (userId) => {
	let { users } = await getDataFromLocal()
	return users.find((user) => user.id == userId)
}
const addUser = async (user) => {
	let { users } = await getDataFromLocal()
	users = users.concat(user)
	localStorage.setItem('users', JSON.stringify(users))
}
const removeUser = async (userId) => {
	let { users } = await getDataFromLocal()
	users = users.filter((user) => user.id != userId)
	localStorage.setItem('users', JSON.stringify(users))
}

const updateUser = async (user) => {
	let { users } = await getDataFromLocal()
	for (let i = 0; i < users.length; i++) {
		if (users[i].id == user.id) {
			users[i] = user
			break
		}
	}
	localStorage.setItem('users', JSON.stringify(users))
}

const getUserBySearch = async (userSearch) => {
	let { users } = await getDataFromLocal()
	return users.filter((user) =>
		user.fullName.toLowerCase().includes(userSearch.toLowerCase()) ||
		user.id == userSearch ||
		removeVietnameseTones(user.fullName).toLowerCase().includes(userSearch.toLowerCase())
	)
}

export {
	updateUser,
	getUserById,
	getUserBySearch,
	removeUser,
	addUser
}
