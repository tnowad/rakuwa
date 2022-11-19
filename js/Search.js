function searchFunction (){
    let menusearch = document.querySelector('.search-text');
    // console.log(menusearch);
    let menuitem = Array.from(document.querySelectorAll('.product-item-center'));
    
    menuitem.forEach(function(e){
        let text = e.innerText;
        if (text.indexOf(menusearch.value))
        // e.style.display = "";
        // else e.style.display = "none";
        console.log("true");
        else console.log("false");
    })
}

