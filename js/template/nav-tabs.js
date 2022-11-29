import { addUrlParameter, getParams } from '../util/util.js'
const navTabs = (categories) => {
	let categoryActive = getParams('category') || 'all'
	categories.unshift('all')
	return /* html */ `
        <ul class="nav-tabs">
            ${categories
				.map(
					(value) => /* html */ `
                    <li class="nav-item ${
						categoryActive != undefined && value == categoryActive
							? 'active'
							: ''
					}">
                        <a href="${addUrlParameter('category', value)}">${
						value.charAt(0).toUpperCase() + value.slice(1)
					}</a>
                    </li>
                `
				)
				.reduce((previousValue, currentValue) => {
					return previousValue + currentValue
				})}
		</ul>
    `
}
export { navTabs }
