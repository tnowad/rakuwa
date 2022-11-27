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
        id = list[list.length-1].id + 1
    } catch (error) {
    }
    return id
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
    createNewId
}