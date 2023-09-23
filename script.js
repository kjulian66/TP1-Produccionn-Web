// Menu desplegable del navbar responsive

const toggle = document.querySelector(".cnt-nav-toggle");
const links = document.querySelector(".cnt-nav-links");


toggle.addEventListener("click", function(){
    toggle.classList.toggle("rotate")
    links.classList.toggle("active")
})

