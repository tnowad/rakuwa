const fetchJson = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    return result
}
const getParams = (entries) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get(entries)
}
const renderHTML = (element, HTMLString) => {
    element.innerHTML +=  HTMLString
}
export { fetchJson, getParams, renderHTML }