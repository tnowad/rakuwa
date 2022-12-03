import { getCategories } from '../util/product.js'
import { renderHTML } from '../util/util.js'
import { navTabs as navTabsHTML } from '../template/nav-tabs.js'
let categories = await getCategories()

const render = () => {
	const navTabs = document.querySelector('.product-tabs-title')
	renderHTML(navTabs, navTabsHTML(Object.keys(categories)))
}
render()
