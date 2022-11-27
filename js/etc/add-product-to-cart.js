const addProductToCart = (productData) => {
    let products = []
    products = JSON.parse(localStorage.getItem('cart')).filter(value => value.id != productData.id)

    let currentProduct = JSON.parse(localStorage.getItem('cart')).filter(value => value.id == productData.id)[0]

    productData.quantity = 0

    try {
        productData.quantity = currentProduct.quantity
    } catch (error) {

    }

    productData.quantity += 1

    console.log(products)
    products.push(productData)

    setItemLocalStorage('cart', products)
}

export {
    addProductToCart,
    // removeProductFormCart,
    // changeProductQuantity,
    // getDetailCart
}