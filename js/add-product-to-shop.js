import { fetchJson, getParams, renderHTML } from './util.js'
const productHTML = (data) => {
    return `
    <div class="product-item">
        ${data.label ? `<span class="label ${data.label}"></span>` : ''}
        <div class="container">
            <div class="product-item-top">
                <img src="${data.image}" class="product-img">
            </div>
            <div class="product-item-center">
                <div class="product-category">
                    <a href="" class="product-category ${data.category}"></a>
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
const productPaginationHTML = (maxPage, currentPage) => {
    let html = ""
    for (let i = 1; i <= maxPage; i++) {
        if (i != currentPage) {
            html += `<li class="page-item"><a href="?page=${i}">${i}</a></li>`
        } else {
            html += `<li class="page-item active"><a href="?page=${i}">${i}</a></li>`
        }
    }
    if (currentPage == 1) {
        html = `<li class="page-item"><a><i class="fas fa-chevron-left"></i></a></li>` + html
        html += `<li class="page-item"><a href="?page=${parseInt(currentPage) + 1}"><i class="fas fa-chevron-right"></i></a></li>`
    } else if (currentPage == maxPage) {
        html = `<li class="page-item"><a href="?page=${parseInt(currentPage) - 1}"><i class="fas fa-chevron-left"></i></a></li>` + html
        html += `<li class="page-item"><a"><i class="fas fa-chevron-right"></i></a></li>`
    } else {
        html = `<li class="page-item"><a href="?page=${parseInt(currentPage) - 1}"><i class="fas fa-chevron-left"></i></a></li>` + html
        html += `<li class="page-item"><a href="?page=${parseInt(currentPage) + 1}"><i class="fas fa-chevron-right"></i></a></li>`
    }
    return html
}
let productItemArray = []
const shopArea = document.querySelector('.product-area')
const filterData = (productData) => {
    productData = productData.filter((value) => {
        // Todo: price, sale, name
        // test with /index.html?page=1&category=vegetable
        if (getParams('category')){
            return value.category == getParams('category')
        } else {
            return true
        }
    })
    return productData
}
const renderShopArea = async () => {
    let productData = await fetchJson('/api/v1/product.json')

    // TODO: filter data

    productData = filterData(productData)

    const productPagination = document.querySelector('.product-pagination')

    const currentPage = getParams('page') ? getParams('page') : 1
    const maxPage = productData.length / 12
    for (let i = ((currentPage - 1) * 12); i < 12 * currentPage; i++) {
        if (productData[i]) {
            renderHTML(shopArea, productHTML(productData[i]))
            productItemArray.push(productData[i])
        }
    }
    renderHTML(productPagination, productPaginationHTML(Math.ceil(maxPage), currentPage))
}
let productItemElements
await renderShopArea().then(() => {
    console.log(shopArea)
    productItemElements = shopArea.querySelectorAll('.product-item')
})
export { productItemArray, productItemElements }