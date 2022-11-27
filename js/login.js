let icon = document.getElementById("eyeicon");
let pwd = document.getElementById("login-password");

pwd.addEventListener("keypress",(event) => {
    icon.style.display= 'block';
    console.log(event.key);
})
// if(pwd.value == ''){
//     icon.style.display = 'none';
// }
icon.addEventListener("click", () => {
    if(icon.classList.contains("fa-eye")){
        pwd.type = 'text';
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }else{
        pwd.type = 'password';
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }

})