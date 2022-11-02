const fetchJson = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    return result
}
const start = async () => {
    const productData = await fetchJson('/api/v1/product.json')
    const product = (data) => {
        return `<div class="product-item">
<span class="label ${data.label ? data.label : ''}">${data.label ? data.label : ''}</span>
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
                <span class="price">${data.price} VND</span><br/>
                <span class="old-price">${data.oldPrice ? data.oldPrice : ''} VND</span>
                </div>
                <div class="product-add-cart">
                <span>
                <a class="fa-solid fa-cart-shopping"></a>
                    Add
                    </span>
                    </div>
        </div>
    </div>
    </div>`
    }

    const shopArea = document.querySelector('.product-area')

    productData.forEach(element => {
        shopArea.innerHTML += product(element)
    })
}
start()