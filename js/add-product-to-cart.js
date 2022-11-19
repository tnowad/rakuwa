import { productItemArray, productItemElements } from './add-product-to-shop.js'
updateProduct();


const addProduct = (productData,productName) => {
    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(productData);
    localStorage.setItem('products', JSON.stringify(products));
    addProductToCart(productName);
}

const removeProduct = (productTitle) => {
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.title !== productTitle);
    // storageProducts.splice(productId);
    localStorage.setItem('products', JSON.stringify(products));
}

productItemElements.forEach((element, index) => {
    element
        .querySelector('.product-add-cart')
        .addEventListener('click', event => {
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement.parentElement;
        var productName = product.querySelector(".product-item-center .product-name").innerText;
        // var cart = document.querySelector(".primary-sidebar .your-cart table tbody");
        var cartItemm = document.querySelectorAll("tbody tr");
        var cartItem = JSON.parse(localStorage.getItem('products'));
        // console.log(typeof cartItem);
        for (var i = 0; i < cartItemm.length; i++) {
        var product = document.querySelectorAll(".title");
        // console.log(product[i].innerHTML);
        // console.log(1);
        if (product[i].innerHTML == productName ){
            alert("Sản phẩm đã có trong giỏ, vui lòng chọn sản phẩm khác");
            return;
        }
       }
        addProduct(productItemArray[index]);

    })
})

// cart
function addProductToCart(){
    var cart = document.querySelector(".primary-sidebar .your-cart table tbody");
    var cartItem = JSON.parse(localStorage.getItem('products'));
    
    var content = cartItem.map(item => {
        return `
            <tr>
                <td  style="display: flex;align-items:center"><img src="${item.image}" alt=""
                        width="70px"><span class="title">${item.title}</span></td>
                <td><span class="prices">${new Intl.NumberFormat().format(item.price)}</span><sup>VND</sup></td>
                <td><input style="width: 30px; outline:none" type="number" value="1" min="1"></td>
                <td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td>
            </tr>
            `
    })
    cart.innerHTML = content.join('');
    pay();
    deleteProductFromCart();
}

function pay(){
    var cartItem = document.querySelectorAll(".primary-sidebar .your-cart table tbody tr");
    var totalPrice = 0;
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector(".your-cart table tbody tr td input").value;
        // console.log(inputValue);
        var price = parseInt(cartItem[i].querySelector(".your-cart table tbody tr td .prices").innerHTML); 
        totalPrice += inputValue*price*1000;
        // console.log(price);
    }        
    var cartTotal = document.querySelector(".price-total span");
    // console.log(typeof new Intl.NumberFormat().format(totalPrice))
    cartTotal.innerHTML =  new Intl.NumberFormat().format(totalPrice) ;
    changeProductQuantity();
}

function updateProduct (){
    var cart = document.querySelector(".primary-sidebar .your-cart table tbody");
    var cartItem = JSON.parse(localStorage.getItem('products'));  
    if (cartItem == null) return;
    var content = cartItem.map(item => {
            return `
                <tr>
                    <td  style="display: flex;align-items:center"><img src="${item.image}" alt=""
                            width="70px"><span class="title">${item.title}</span></td>
                    <td><span class="prices">${new Intl.NumberFormat().format(item.price)}</span><sup>VND</sup></td>
                    <td><input style="width: 30px; outline:none" type="number" value="1" min="1"></td>
                    <td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td>
                </tr>
                `
    })
    cart.innerHTML = content.join('');
    pay();
    deleteProductFromCart();

}

function changeProductQuantity(){
    var cartItem = document.querySelectorAll(".primary-sidebar .your-cart table tbody tr");
    for (var i=0;i<cartItem.length;i++){ 
            var amountCart = cartItem[i].querySelector(".primary-sidebar .your-cart table tbody tr td input");
            amountCart.addEventListener("change", function(){
                pay();
            }); 
        }
}

function deleteProductFromCart(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++){ 
            var productT = document.querySelectorAll("tbody tr td .cart-delete");
            productT[i].addEventListener("click", (event)=>{
                if(confirm("Bạn muốn xoá sản phẩm này chứ ?")){
                    var cartDelete = event.target;
                    var cartItemDelete = cartDelete.parentElement.parentElement;        
                    
                    var deleteName = cartItemDelete.querySelector(".title").innerHTML;
                    console.log(deleteName);
    
                    cartItemDelete.remove();
                    console.log(cartItemDelete);
                    pay();
                    removeProduct(deleteName)
            }
            })
        }
    
        // updateProduct();
}

