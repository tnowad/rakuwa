const fetchJson = async (url) => {
	const response = await fetch(url)
	const result = await response.json()
	return result
}
const fetchHTML = async (url) => {
	const response = await fetch(url)
	const result = await response.text()
	return result
}
const getParams = (entries) => {
	const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
	return urlParams.get(entries)
}

const renderHTML = (element, HTMLString) => {
	element.innerHTML += HTMLString
}

const addActive = (element) => {
	element.classList.add('active')
}

const removeActive = (element) => {
	element.classList.remove('active')
}

const toggleActive = (element) => {
	element.classList.toggle('active')
}

const clearLocalStorage = () => {
	localStorage.clear()
}

const createNewId = (list) => {
	let id = 0
	try {
		id = list[list.length - 1].id + 1
	} catch (error) {}
	return id
}

const splitArrayByPage = (array, elementPerPage, currentPage) => {
	// const maxPage = array.length / elementPerPage
	let newArray = []
	for (
		let i = (currentPage - 1) * elementPerPage;
		i < elementPerPage * currentPage;
		i++
	) {
		newArray.push(array[i])
	}
	return newArray
}
const addUrlParameter = (name, value) => {
	let searchParams = new URLSearchParams(window.location.search)
	searchParams.set(name, value)
	return '?' + searchParams.toString()
}

const removeVietnameseTones = (string) => {
	string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
	string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
	string = string.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
	string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
	string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
	string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
	string = string.replace(/đ/g, 'd')
	string = string.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
	string = string.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
	string = string.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
	string = string.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
	string = string.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
	string = string.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
	string = string.replace(/Đ/g, 'D')
	string = string.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
	string = string.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
	string = string.replace(/ + /g, ' ')
	string = string.trim()
	string = string.replace(
		/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
		' ',
	)
	return string
}

export {
	fetchJson,
	fetchHTML,
	getParams,
	renderHTML,
	addActive,
	removeActive,
	toggleActive,
	clearLocalStorage,
	createNewId,
	splitArrayByPage,
	addUrlParameter,
	removeVietnameseTones,
}
