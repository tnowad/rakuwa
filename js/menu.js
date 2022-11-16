let MenuRightClick = document.getElementById('menu');
document.addEventListener('contextmenu', function(event){
    event.preventDefault();
    MenuRightClick.style.display ='block';
    MenuRightClick.style.top =event.y + 'px';
    MenuRightClick.style.left =event.x + 'px';
})
document.addEventListener('click', function(){
    MenuRightClick.style.display='none';

})