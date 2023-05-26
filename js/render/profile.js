import { updateUser } from '../util/user.js'
import { getDataFromLocal } from '../util/local-data.js'
import { addActive, removeActive } from '../util/util.js'
import { convertBase64 } from '../util/file-to-base64.js'
import { loginRequired } from '../util/account.js'

const showProfileMenu = async () => {
	const profileNavLists = document.querySelectorAll('.profile-nav-list')

	profileNavLists.forEach((element) => {
		element.addEventListener('click', () => {
			profileNavLists.forEach((element) => {
				removeActive(element)
			})

			addActive(element)
		})
	})
}

const changeTabs = async () => {
	const profileTabLists = document.querySelectorAll('.profile-tab-item')
	const profileNavListItems = document.querySelectorAll(
		'.profile-nav-list-menu-item',
	)

	profileNavListItems.forEach((element) => {
		element.addEventListener('click', () => {
			profileNavListItems.forEach((element) => {
				removeActive(element)
			})

			profileTabLists.forEach((element) => {
				removeActive(element)
			})

			addActive(document.querySelector(`#${element.id}-tab`))
			addActive(element)
		})
	})
}

const changePwdForm = async () => {
	const showChangePwd = document.querySelector('.show-change-pwd')
	const changePwdForm = document.querySelector('.change-pwd-layout')
	const closeChangePwd = document.querySelector('.close-pwd-form')

	showChangePwd.addEventListener('click', () => {
		addActive(changePwdForm)
	})

	closeChangePwd.addEventListener('click', () => {
		removeActive(changePwdForm)
	})
}

showProfileMenu()
changeTabs()
changePwdForm()

window.onload = async () => {
	loginRequired()
	let { currentUser } = await getDataFromLocal()
	const profileForm = document.querySelector('.profile-tab-form')
	const profileUsername = profileForm.querySelector('#profile-user-username')
	const profileFullName = profileForm.querySelector('#profile-user-full-name')
	const profilePassword = profileForm.querySelector('#profile-user-password')
	const profileEmail = profileForm.querySelector('#profile-user-email')
	const profileAddress = profileForm.querySelector('#profile-user-address')
	const profilePhoneNumber = profileForm.querySelector(
		'#profile-user-phone-number',
	)
	const profileDateOfBirth = profileForm.querySelector(
		'#profile-user-date-of-birth',
	)
	const profileGender = profileForm.querySelector('#profile-user-gender')
	const profileImage = profileForm.querySelector('#profile-user-image')
	profileUsername.value = currentUser.username
	profileFullName.value = currentUser.fullName
	profileEmail.value = currentUser.email
	profilePassword.value = currentUser.password
	profileAddress.value = currentUser.address
	profileGender.value = currentUser.gender
	profilePhoneNumber.value = currentUser.phoneNumber
	profileDateOfBirth.value = currentUser.dateOfBirth
	// profileImage.value = currentUser.image
	profileForm.addEventListener('submit', async (event) => {
		event.preventDefault()
		currentUser = {
			...currentUser,
			fullName: profileFullName.value,
			email: profileEmail.value,
			password: profilePassword.value,
			address: profileAddress.value,
			gender: profileGender.value,
			phoneNumber: profilePhoneNumber.value,
			dateOfBirth: profileDateOfBirth.value,
		}

		try {
			currentUser = {
				...currentUser,
				image: await convertBase64(profileImage.files[0]),
			}
		} catch (error) {}

		if (
			currentUser.fullName == '' ||
			currentUser.email == '' ||
			currentUser.password == '' ||
			currentUser.address == '' ||
			currentUser.gender == '' ||
			currentUser.phoneNumber == '' ||
			currentUser.dateOfBirth == ''
		) {
			alert(' Không được để trống')
			return
		}

		updateUser(currentUser)
		localStorage.setItem('currentUser', JSON.stringify(currentUser))
		location.reload()
	})
}
