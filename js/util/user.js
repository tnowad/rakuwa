import { getDataFromLocal } from './local-data.js'

const getUserById = async (userId) => {
	let { users } = await getDataFromLocal()
	return users.find((user) => user.id == userId)
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

const searchUser = async (user) => { 
	let { users } = await getDataFromLocal()
    return users.filter((user) => user.username.toLowerCase().includes(user.username.toLowerCase()))
}

const removeUser = async (user) => { 
	let { users } = await getDataFromLocal()
	users =  users.filter((user) => user.id != user.id)
	localStorage.setItem('users', JSON.stringify(users))
}

const addUser = async (user) => { 
	let { users } = await getDataFromLocal()
    users = users.concat(user)
    localStorage.setItem('users', JSON.stringify(users))
}

export { updateUser, getUserById,searchUser,removeUser,addUser}

