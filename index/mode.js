function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var navligth = document.getElementById("nav");
    navligth.classList.toggle("dark-mode");
    var logona = document.getElementById("logo");
    logona.classList.toggle("dark-mode");
    var a = document.getElementById("a");
    a.classList.toggle("dark-mode");
    var b = document.getElementById("b");
    b.classList.toggle("dark-mode");
    var c = document.getElementById("c");
    c.classList.toggle("dark-mode");
    var modee = document.getElementById("mode");
    modee.classList.toggle("dark-mode");
    var login = document.getElementById("login");
    login.classList.toggle("dark-mode");
    var menu = document.getElementById("menu-container");
    menu.classList.toggle("dark-mode2");
    var titulo = document.getElementById("titulo-pagina");
    titulo.classList.toggle("dark-mode3");
    var input = document.getElementById("input-menu");
    input.classList.toggle("dark-mode3");
    var search = document.getElementById("search");
    search.classList.toggle("dark-mode");
    var container = document.getElementById("container");
    container.classList.toggle("dark-mode");
    var list =  document.querySelector(".nav-list");
    list.classList.toggle("dark-mode");
    var mobilemenu =  document.querySelector(".mobile-menu");
    mobilemenu.classList.toggle("dark-mode2");
    var valores = document.getElementsByClassName('jogos');
for (var i=0; valores[i]; i++) {
    valores[i].classList.toggle("dark-mode2");
}
}