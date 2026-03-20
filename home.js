let menu_btn = document.querySelector("#hamburger-btn")
let mobile_menu = document.querySelector("#mobile-menu")
mob = 1
menu_btn.addEventListener("click",function(){
    if(mob === 1)
    {
        mobile_menu.style.display = "flex"
        mobile_menu.style.animation = "change 4s linear infinite"
        mob = 0
    }
    else
    {
        mobile_menu.style.display = "none"
        mob = 1
    }
 })
