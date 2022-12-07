import { getDataFromLocal } from '../util/local-data.js'

const render = async () => {
	const { currentUser } = await getDataFromLocal()
	const adminImage = document.querySelector('#admin-profile-image')
	const adminName = document.querySelector('#admin-profile-name')
	adminImage.src = currentUser.image
	adminName.textContent = currentUser.fullName
}

render()
