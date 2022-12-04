import { uploadImage } from '../util/file-to-base64.js'

const inputFile = document.querySelector('#upload-image')

inputFile.addEventListener('change', async (event) => {
	console.log(await uploadImage(event))
})
