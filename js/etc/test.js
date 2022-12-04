import { inputUploadImage } from '../util/file-to-base64.js'

const inputFile = document.querySelector('#upload-image')

inputUploadImage(inputFile).then((base64) => console.log(base64))
