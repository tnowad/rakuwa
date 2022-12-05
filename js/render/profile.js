import { addActive, removeActive } from '/js/util/util.js'

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

	const profileNavListItems = document.querySelectorAll('.profile-nav-list-menu-item')

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

const showChangePwdForm = async () => {
	const showChangePwd = document.querySelector('.show-change-pwd')
	const changePwdForm = document.querySelector('.change-pwd-layout')
	showChangePwd.addEventListener('click', () => {
			addActive(changePwdForm)
		}
	)
}

const closeChangePwdForm = async () => {
	const closeChangePwd = document.querySelector('.close-pwd-form')
	const changePwdForm = document.querySelector('.change-pwd-layout')
	removeActive(changePwdForm)
	closeChangePwd.addEventListener('click', () => {
			removeActive(changePwdForm)
		}
	)
}

showProfileMenu()
changeTabs()
showChangePwdForm()
closeChangePwdForm()