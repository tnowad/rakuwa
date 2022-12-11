

const optionCart = document.querySelector('.dashboard-table-product')


window.openFormCart = async () => { 
    // console.log(1)
    optionCart.style = 'display:inline'
}

window.closeFormCart = async () => { 
    optionCart.style = 'display:none'
}