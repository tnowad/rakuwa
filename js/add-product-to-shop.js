import { fetchJson, getParams, renderHTML } from './util.js'
const product = (data) => {
    return `
    <div class="product-item">
        ${data.label ? `<span class="label ${data.label}"></span>` : ''}
        <div class="container">
            <div class="product-item-top">
                <img src="${data.image}" class="product-img">
            </div>
            <div class="product-item-center">
                <div class="product-category">
                    <a href="">${data.category}</a>
                </div>
                <a class="product-name" href="/pages/product.html?id=${data.id}">${data.title}</a>
                <div class="product-rate">
                    ${((rating) => {
            const star = Math.floor(rating)
            let html = ''
            for (let i = 1; i <= 5; i++) {
                if (i <= star) {
                    html += '<em class="fas fa-star active"></em>'
                } else {
                    html += '<em class="fas fa-star"></em>'
                }
            }
            return html
        })(data.rating)}
                </div>
            </div>
            <div class="product-item-bottom">
                <div class="product-price">
                    <span class="price">${new Intl.NumberFormat().format(data.price)} VND</span>
                    ${data.oldPrice ? `<br/><span class="old-price">${new Intl.NumberFormat().format(data.oldPrice)} VND</span>` : ''}
                </div>
                <div class="product-add-cart">
                    <span><a class="fa-solid fa-cart-shopping"></a>Add</span>
            </div>
            </div>
        </div>
    </div>`
}
const main = async () => {
    const productData = await fetchJson('/api/v1/product.json')

    const shopArea = document.querySelector('.product-area')
    const page = getParams('page') ? getParams('page') : 1
    const maxPage = productData.length / 12

    for (let i = ((page - 1) * 12); i < 12 * page; i++) {
        if (productData[i]){
            renderHTML(shopArea, product(productData[i]))
        }
    }
    const productPagination = document.querySelector('.product-pagination')
    for (let i = 1; i <= maxPage; i++) {
        if (i != page) {
            productPagination.innerHTML += `<li class="page-item"><a href="?page=${i}">${i}</a></li>`
        } else {
            productPagination.innerHTML += `<li class="page-item active"><a href="?page=${i}">${i}</a></li>`
        }
    }
    if (page == 1) {
        productPagination.innerHTML = `<li class="page-item"><a><i class="fas fa-chevron-left"></i></a></li>` + productPagination.innerHTML
        productPagination.innerHTML += `<li class="page-item"><a href="?page=${parseInt(page) + 1}"><i class="fas fa-chevron-right"></i></a></li>`
    } else if (page == maxPage) {
        productPagination.innerHTML = `<li class="page-item"><a href="?page=${parseInt(page) - 1}"><i class="fas fa-chevron-left"></i></a></li>` + productPagination.innerHTML
        productPagination.innerHTML += `<li class="page-item"><a"><i class="fas fa-chevron-right"></i></a></li>`
    } else {
        productPagination.innerHTML = `<li class="page-item"><a href="?page=${parseInt(page) - 1}"><i class="fas fa-chevron-left"></i></a></li>` + productPagination.innerHTML
        productPagination.innerHTML += `<li class="page-item"><a href="?page=${parseInt(page) + 1}"><i class="fas fa-chevron-right"></i></a></li>`
    }
}

main()



