import { fetchHTML, renderHTML, addActive, removeActive } from "./util.js"

const main = async () => {
    const contextMenu = document.createElement('div')
    contextMenu.classList.add('context-menu')

    document.body.appendChild(contextMenu)

    const contextMenuHTML = await fetchHTML('./pages/context-menu.html')

    renderHTML(contextMenu, contextMenuHTML)

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault()
        addActive(contextMenu)
        if(window.innerWidth - event.x < 200) {
            contextMenu.style.right = 0
            contextMenu.style.left = ''
        } else {
            contextMenu.style.right = ''
            contextMenu.style.left = event.x + 'px'
        }
        contextMenu.style.top = event.y + 'px'
    })

    document.addEventListener('click', () => {
        removeActive(contextMenu)
    })
}

main()