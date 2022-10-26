const productData = `<div class="product-item">
<div class="product-item-top">
    <img src="/img/product-6-1.jpg" class="prduct-img">
    <span class="hot">Hot</span>
</div>
<div class="container">
<div class="product-item-center">
    <div class="product-category">
        <a href="">Instant Noodles</a>
    </div>
    <h2 class="product-name">Chobani Complete Vanilla Greek</h2>
    <div class="product-rate">
        <em class="fas fa-star active"></em>
        <em class="fas fa-star active"></em>
        <em class="fas fa-star active"></em>
        <em class="fas fa-star active"></em>
        <em class="fas fa-star"></em>
    </div>
</div>
<div class="product-item-bottom">
    <div class="product-price">
        <span class="price">$55</span>
        <span class="old-price">$90</span>
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

const shopArea = document.querySelector('.product-area')

for(let i = 0; i < 15; i++) {
    shopArea.innerHTML += productData
}