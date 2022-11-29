import { addUrlParameter } from '../util/util.js'
const pagination = (maxPage, currentPage) => {
	if (maxPage != 0 && currentPage > maxPage) {
        location.assign(addUrlParameter('page', 1))
	}
	let html = ''
	for (let i = 1; i <= maxPage; i++) {
		if (i != currentPage) {
			html += `<li class="page-item"><a href="${addUrlParameter(
				'page',
				i
			)}">${i}</a></li>`
		} else {
			html += `<li class="page-item active"><a href="${addUrlParameter(
				'page',
				i
			)}">${i}</a></li>`
		}
	}
	if (currentPage == 1) {
		html =
			`<li class="page-item"><a><i class="fas fa-chevron-left"></i></a></li>` +
			html
		html += `<li class="page-item"><a href="
            ${addUrlParameter('page', parseInt(currentPage) + 1)}
        "><i class="fas fa-chevron-right"></i></a></li>`
	} else if (currentPage == maxPage) {
		html =
			`<li class="page-item"><a href="${addUrlParameter(
				'page',
				parseInt(currentPage) - 1
			)}"><i class="fas fa-chevron-left"></i></a></li>` + html
		html += `<li class="page-item"><a"><i class="fas fa-chevron-right"></i></a></li>`
	} else {
		html =
			`<li class="page-item"><a href="${addUrlParameter(
				'page',
				parseInt(currentPage) - 1
			)}"><i class="fas fa-chevron-left"></i></a></li>` + html
		html += `<li class="page-item"><a href="${addUrlParameter(
			'page',
			parseInt(currentPage) + 1
		)}"><i class="fas fa-chevron-right"></i></a></li>`
	}
	return html
}
export { pagination }
