import { convertBase64 } from '../util/file-to-base64.js'
import { addUser } from '../util/user.js'

var optionForm = document.querySelector('.content-body .form-group-user')

window.openFormUserAdd = async () => {
	optionForm.style = 'display: grid'
	optionForm.style.transition = 'all 5s ease-in-out'
}

window.cancelFormUserAdd = async () => {
	optionForm.style = 'display: none'
}

window.addUserToDashboard = async () => {
	let user = {
		fullName: optionForm.querySelector('#fullName').value,
		dateOfBirth: optionForm.querySelector('#dateOfBirth').value,
		email: optionForm.querySelector('#email').value,
		phoneNumber: optionForm.querySelector('#phone').value,
		gender: optionForm.querySelector('#gender').value,
		address: optionForm.querySelector('#address').value,
		status: optionForm.querySelector('#status').value,
        role: optionForm.querySelector('#role').value,
        username: optionForm.querySelector('#username').value,
		password: optionForm.querySelector('#password').value,
	}

	try {
		user = {
			...user,
			image: await convertBase64(
				optionForm.querySelector('#image').files[0],
			),
		}
	} catch {}
		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!validRegex.test(user.email)) { 
		alert("Email không chính xác")
		return
	}
	if (
		user.fullName == "" ||
		user.dateOfBirth == null ||
		user.email == "" ||
		user.phoneNumber == "" ||
		user.gender == "" ||
		user.address == "" ||
		user.status == "" ||
        user.role == "" ||
        user.username == "" ||
		user.password == "" ||
		user.image == null
	) {
		alert('Không được để trống')
		return
	} else {
		addUser(user)
		location.reload()
	}
}
