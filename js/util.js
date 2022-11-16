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

export { fetchJson, fetchHTML, getParams, renderHTML, addActive, removeActive, toggleActive }