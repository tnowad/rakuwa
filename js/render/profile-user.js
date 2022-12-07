import { getDataFromLocal } from '../util/local-data.js'
const render = async () => {
	const { currentUser } = await getDataFromLocal()
	const userImage = document.querySelector('#user-image')
	const userFullName = document.querySelector('#user-full-name')
	userImage.src = currentUser.image
	userFullName.textContent = currentUser.fullName
}
render()
