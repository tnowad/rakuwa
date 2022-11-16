let menu = document.getElementById('menu');
document.addEventListener('contextmenu', function(event){
    event.preventDefault();
    menu.style.display ='block';
    menu.style.top =event.y + 'px';
    menu.style.left =event.x + 'px';
})
document.addEventListener('click', function(){
    menu.style.display='none';
})