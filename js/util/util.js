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
}
