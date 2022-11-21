import { productItemArray, productItemElements } from './add-product-to-shop.js'

const showAndCloseCart = () => {
const cartShow = document.querySelector(".menu-icon .btn-cart .fa-cart-plus");
const cartBtn = document.querySelector(".primary-sidebar .container .fa-window-close");
cartShow.addEventListener("click",()=> document.querySelector(".primary-sidebar .container").style.right="5px"); 
cartShow.addEventListener("click",()=> document.querySelector(".primary-sidebar .container").style.transition="all 0.7s ease"); 
cartBtn.addEventListener("click",()=> document.querySelector(".primary-sidebar .container").style.right="-100%");
cartBtn.addEventListener("click",()=> document.querySelector(".primary-sidebar .container").style.transition="all 0.7s ease"); 
}

const updateProduct = () => {
    let cartItem = JSON.parse(localStorage.getItem('products')) 
    if (cartItem == null) {
        return
    }
    let content = cartItem.map(item => {
            return `
                <tr>
                    <td  style="display: flex;align-items:center"><img src="${item.image}" alt=""
                            width="70px"><span class="title">${item.title}</span></td>
                    <td><span class="prices">${new Intl.NumberFormat().format(item.price)}</span><sup>VND</sup></td>
                    <td><input style="width: 30px; outline:none" type="number" value="${item.amountLast}" min="1"></td>
                    <td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td>
                </tr>
                `
    })
    let cart = document.querySelector(".primary-sidebar .container .your-cart table tbody");
    cart.innerHTML = content.join('')
    pay()
    deleteProductFromCart()
}

productItemElements.forEach((element, index) => {
    element
        .querySelector('.product-add-cart')
        .addEventListener('click', event => {
        let btnItem = event.target
        let productParent = btnItem.parentElement.parentElement.parentElement
        let productName = productParent.querySelector(".product-item-center .product-name").innerText
        let cartItem = document.querySelectorAll("tbody tr")
        for (let i = 0; i < cartItem.length; i++) {
            let product = document.querySelectorAll(".title")
            if (product[i].innerHTML == productName ){
                alert("Sản phẩm đã có trong giỏ, vui lòng chọn sản phẩm khác")
                return;
            }
       }
        addProduct(productItemArray[index])
    })
})

// cart
const addProductToCart = () => {
    let cart = document.querySelector(".primary-sidebar .your-cart table tbody")
    let cartItem = JSON.parse(localStorage.getItem('products'))
    let id
    let amountCart = 1

    let content = cartItem.map((item,index) => {     
        id = index 
        return `
            <tr>
                <td  style="display: flex;align-items:center"><img src="${item.image}" alt=""
                        width="70px"><span class="title">${item.title}</span></td>
                <td><span class="prices">${new Intl.NumberFormat().format(item.price)}</span><sup>VND</sup></td>
                <td><input style="width: 30px; outline:none" type="number" value="${amountCart}" min="1"></td>
                <td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td>
            </tr>
            `
    })
    cart.innerHTML = content.join('')
    changeProductQuantity(amountCart,id)
    updateProduct()
    pay()
    deleteProductFromCart()
}

const addProduct = productData => {
    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'))
    }
    products.push(productData)
    localStorage.setItem('products', JSON.stringify(products))
    addProductToCart()
}

const removeProduct = productTitle => {
    let storageProducts = JSON.parse(localStorage.getItem('products'))
    let products = storageProducts.filter(product => product.title !== productTitle)
    localStorage.setItem('products', JSON.stringify(products))
}

const deleteProductFromCart = () => {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i=0;i<cartItem.length;i++){ 
            let productT = document.querySelectorAll("tbody tr td .cart-delete")
            productT[i].addEventListener("click", (event)=>{
                if(confirm("Bạn muốn xoá sản phẩm này khỏi giỏ hàng chứ ?")){
                    let cartDelete = event.target
                    let cartItemDelete = cartDelete.parentElement.parentElement   
                    let deleteName = cartItemDelete.querySelector(".title").innerHTML
                    cartItemDelete.remove()
                    pay()
                    removeProduct(deleteName)
                }   
            })
    }
}

const changeProduct = () => {
    let cartItem = document.querySelectorAll(".primary-sidebar .your-cart table tbody tr")
            cartItem.forEach((value, index)=> {
            let amountCart = value.querySelector(".primary-sidebar .your-cart table tbody tr td input")
            amountCart.addEventListener("change", function(){
                pay()
                let productAmount = amountCart.value
                changeProductQuantity(productAmount,index)
                updateProduct()
            }); 
        })
}

const changeProductQuantity = (productAmount,id) => {
    let products = JSON.parse(localStorage.getItem('products'))
    products.map((item,index)=>{
        if (index === id){

            if(productAmount > item.amount){
                alert("Sản phẩm chỉ còn có " + item.amount + " số lượng")
                products[id] = {
                "amountLast" : item.amount,
                "amount": item.amount,
                "category": item.category,
                "description": item.description,
                "id": item.id,
                "image": item.image,
                "label": item.label,
                "oldPrice": item.oldPrice,
                "price": item.price,
                "rating": item.rating,
                "title": item.title
                }
                return
            }
            else {
                products[id] = {
                "amountLast" : productAmount,
                "amount": item.amount,
                "category": item.category,
                "description": item.description,
                "id": item.id,
                "image": item.image,
                "label": item.label,
                "oldPrice": item.oldPrice,
                "price": item.price,
                "rating": item.rating,
                "title": item.title
                }
            }
        }
    })
    pay()
    localStorage.setItem('products', JSON.stringify(products))
}


const pay = () => {
    let cartItem = document.querySelectorAll(".primary-sidebar .your-cart table tbody tr")
    let totalPrice = 0
    for (const element of cartItem){
        let inputValue = element.querySelector(".your-cart table tbody tr td input").value
        let price = parseInt(element.querySelector(".your-cart table tbody tr td .prices").innerHTML)
        totalPrice += inputValue*price*1000;
    }        
    let cartTotal = document.querySelector(".price-total span")
    cartTotal.innerHTML =  new Intl.NumberFormat().format(totalPrice)
    changeProduct()
}

updateProduct()
showAndCloseCart()