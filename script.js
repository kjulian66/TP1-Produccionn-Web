// Menu desplegable del navbar responsive

const toggle = document.querySelector(".cnt-nav-toggle");
const links = document.querySelector(".cnt-nav-links");
const menuGestion = document.querySelector("#cnt-menuGestion");
const menuGestionCarrito = document.querySelector(".menuGestion-carrito")

toggle.addEventListener("click", function(){
    toggle.classList.toggle("rotate")
    links.classList.toggle("active")
    menuGestion.classList.toggle("active-menuGestion")
    menuGestionCarrito.classList.toggle("active-menuGestion-carrito")
})

