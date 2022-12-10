import { createProduct } from "../util/product.js"
import { convertBase64 } from '../util/file-to-base64.js'

const optionForm = document.querySelector('.content-body .form-group-add')

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
			image: await convertBase64(optionForm.querySelector('#image').files[0]),
		}
    } catch { }
    createProduct(product)
    // createProduct(product)    
}