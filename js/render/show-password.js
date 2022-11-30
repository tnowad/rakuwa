let icon = document.getElementById('eyeicon')
let password = document.getElementById('login-password')

password.addEventListener('keypress', (event) => {
	icon.style.display = 'block'
	console.log(event.key)
})
icon.addEventListener('click', () => {
	if (icon.classList.contains('fa-eye')) {
		password.type = 'text'
		icon.classList.remove('fa-eye')
		icon.classList.add('fa-eye-slash')
	} else {
		password.type = 'password'
		icon.classList.add('fa-eye')
		icon.classList.remove('fa-eye-slash')
	}
})
