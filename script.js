let menu = document.querySelector(".menu")
let remove_nav = document.querySelector(".nav-remove")
let side_nav = document.querySelector(".side-nav")

menu.addEventListener("click",function(){
    side_nav.style.display = "flex"

})

remove_nav.addEventListener("click",function(){
    side_nav.style.display = "none"
})
