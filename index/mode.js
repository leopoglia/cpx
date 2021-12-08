function pedro() {
    document.querySelector('a').style = 'color: #154bbb;';
    document.body.style = "background-color: #e7e7e7;";
    nav.style = "background-color: white;";

    document.getElementById("a").style.color = "#154bbb";
    document.getElementById("b").style.color = "#154bbb";
    document.getElementById("c").style.color = "#154bbb";
    document.getElementById("menu-container").style = "background-color: #154bbb";
    document.getElementById("container").style.background = "white";
    document.getElementById("input-menu").style = "background-color: white; box-shadow: 0px -4px 0px rgb(225,225,225) inset;";
    document.getElementById("search").style = "color: #2a2a2a;";
    document.getElementById("mode").style = "color: #154bbb;";
    document.getElementById("login").style = "color: #154bbb;";
    document.getElementById("version").style = "background: #e7e7e7; color: #154bbb;";
    document.getElementById("titulo-pagina").style = "background-color: #e7e7e7;";
    document.getElementById("casa").style = "color: #154bbb;";
    var navlist = document.querySelectorAll('.nav-list');
    navlist[0].style = "background-color: white; box-shadow: 0px 0px 0px #154bbb";

    var tracos = document.querySelectorAll('.mobile-menu div');
    tracos[0].style = "background: #154bbb;";
    tracos[1].style = "background: #154bbb;";
    tracos[2].style = "background: #154bbb;";


    var active = document.querySelectorAll('.jogos');
    var active2 = document.querySelectorAll('.titulojogo');
    for (var i = 0; i < active.length; i++) {
        active[i].style = "background-color: #154bbb";
        active2[i].style = "background-color: #154bbb";

    }
}