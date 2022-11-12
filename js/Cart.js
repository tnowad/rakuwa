// -------------------- json --------

const fetchJson = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    return result
}

const start = async () => {
    const productData = await fetchJson('/api/v1/product.json')
    const product = (data) => {
        return `
               <div class="product-item">
                    ${data.label ? `<span class="label ${data.label}"></span>` : ''}
                    <div class="container">
                        <div class="product-item-top">
                            <img src="${data.image}" alt="">
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
                            <p><span>${data.price}</span><sup>$ </sup></p>   
                        </div>          
                        <button>Add</button>
                    </div>
                </div>
        `
    }

    const shopArea = document.querySelector('.product-items')
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const page = urlParams.get('page') ? urlParams.get('page') : 1
    console.log(page)
    for(let i = ((page-1) * 24); i < 24*page; i++) {
        if(productData[i])
        shopArea.innerHTML += product(productData[i])
    }
    const btn = document.querySelectorAll(".product-item button");
// console.log (btn);
btn.forEach((button,index)=>{
//    console.log (button,index);
    button.addEventListener("click",(event)=>{{
        var btnItem = event.target; // lôi thằng button ra
        // console.log(event);
        var product = btnItem.parentElement;// truy xuất đến thằng cha của button là .product-item
        // console.log(product);
        var productImg = product.querySelector(".product-item img").src;
        // console.log(productImg);
        var productName = product.querySelector(".product-item-center .product-name").innerText;
        var productPrice = product.querySelector(".product-item-bottom p span").innerText;
        // console.log(productPrice) ;
        addCart(productPrice,productImg, productName);
    }})
}) 

function addCart(productPrice,productImg, productName){
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
        for (var i=0;i<cartItem.length;i++){ // vòng lặp kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            var productT = document.querySelectorAll(".title");
            if (productT[i].innerHTML == productName){
                alert("Sản phẩm đã được thêm vào giỏ hàng!!");
                return;
            }
        }
        // nếu sản phẩm chưa thêm vào giỏ hàng thì lệnh dưới đây sẽ thêm chúng vào
    var trcontent = `
                    <tr>
                        <td  style="display: flex;align-items:center"><img src="${productImg}" alt=""
                                width="70px"><span class="title">${productName}</span></td>
                        <td><span class="prices">${productPrice}</span><sup>$</sup></td>
                        <td><input style="width: 30px; outline:none" type="number" value="1" min="1"></td>
                        <td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td>
                    </tr>
    `
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr); 

    // sau khi thêm hàng vào giỏ thì hàm cartTotal sẽ thực hiện tính tổng tiền
    cartTotal();
    deleteCart();
}

// ------------------------------------Total Price--------------------------------------------------------------

function cartTotal (){
    var cartItem = document.querySelectorAll("tbody tr");
    // console.log(cartItem.length);
    totalPrice = 0;
    for (var i=0;i<cartItem.length;i++){
        // console.log(i); 
        var inputValue = cartItem[i].querySelector("input").value;
        // console.log(inputValue);
        var productPrice = cartItem[i].querySelector(".prices").innerHTML;
        // console.log(productPrice); 
        totalA = inputValue*productPrice;
        totalPrice += totalA;
    }
    var cartTotal = document.querySelector(".price-total span");
    var cartPrice = document.querySelector(".cart-icon span");
    cartPrice.innerHTML = totalPrice.toLocaleString('de-DE');
    cartTotal.innerHTML = totalPrice.toLocaleString('de-DE');
    changeCart();
}

// ------------------------------------Delete cart--------------------------------------------------------------

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++){ // vòng lặp kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            var productT = document.querySelectorAll("tbody tr td .cart-delete");
            productT[i].addEventListener("click", (event)=>{
                var cartDelete = event.target;
                var cartItemDelete = cartDelete.parentElement.parentElement;        
                cartItemDelete.remove();
                // console.log(cartItemDelete);
                cartTotal();
            })
        }
}

// ------------------------------------Change amount cart --------------------------------------------------------------
function changeCart(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++){ // vòng lặp kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            var amountCart = cartItem[i].querySelector("tr td input");
            amountCart.addEventListener("change", function(){
                cartTotal();
            }); 
        }
}

const cartShow = document.querySelector(".fa-shopping-cart");
const cartbtn = document.querySelector(".fa-close");
cartShow.addEventListener("click",()=> document.querySelector(".cart").style.right="0"); 
cartbtn.addEventListener("click",()=> document.querySelector(".cart").style.right="-100%");


}
start()