const convertBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader()
		fileReader.readAsDataURL(file)
		fileReader.onload = () => {
			resolve(fileReader.result)
		}
		fileReader.onerror = (error) => {
			reject(error)
		}
	})
}

const uploadImage = async (event) => {
	const file = event.target.files[0]
	const base64 = await convertBase64(file)
	return base64
}

export { convertBase64, uploadImage }
