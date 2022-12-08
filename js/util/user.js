import { getDataFromLocal } from "./local-data.js"

const getUserById = async (userId) => {
	let { users } = await getDataFromLocal()
	return users.find((user) => user.id == userId)
}

const updateUser = async (user) => {
	let { users } = await getDataFromLocal()
	for (const i = 0; i < users.length; i++) {
		if (users[i].id == user.id) {
			users[i] = user
			break
		}
	}
	localStorage.setItem('users', JSON.stringify(users))
}

export{updateUser,getUserById}