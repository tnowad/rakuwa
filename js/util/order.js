function totalOrder() {
    event.preventDefault()
    let subtotal = 0
    let inputs = document.querySelectorAll()
    inputs.forEach(input => {
        subtotal += parseFloat(input.price)
    });
  
    let tax = parseFloat(subtotal * '.10');
    let total = parseFloat(subtotal + tax);
  
    document.querySelector("#subtotal").innerHTML = "Subtotal: VND"  + subtotal.toFixed(2);
    document.querySelector("#tax").innerHTML      = "Sales Tax: VND" + tax.toFixed(2);
    document.querySelector("#totalTax").innerHTML = "Total: VND"     + total.toFixed(2);
  }
  