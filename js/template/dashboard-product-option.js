import { createProduct } from '../util/product.js'
import { convertBase64 } from '../util/file-to-base64.js'

var optionForm = document.querySelector('.content-body .form-group-product')

window.openForm = async () => {
	optionForm.style = 'display: inline'
}
window.cancelForm = async () => {
	optionForm.style = 'display: none'
}

window.addProductToDashboard = async () => {
	let product = {
		title: optionForm.querySelector('#title').value,
		category: optionForm.querySelector('#category').value,
		amount: optionForm.querySelector('#amount').value,
		price: optionForm.querySelector('#price').value,
		description: optionForm.querySelector('#description').value,
	}
    try {
		product = {
			...product,
			image: await convertBase64(optionForm.querySelector('#image').files[0]),
		}
	} catch {}
	
	if (
		product.title == "" ||
		product.category == "" ||
		product.amount == 0 ||
		product.price == 0 ||
        product.description == "" ||
        product.image == null
	) {
        alert('Không được để trống!')
        return
	} else {
        createProduct(product)
        location.reload()
	}
}
