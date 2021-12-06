function pedro(){
    document.querySelector('a').style = 'color: #154bbb;';
    document.body.style = "background-color: #e7e7e7;";
    nav.style.backgroundColor = "white";

    document.getElementById("a").style.color = "#154bbb";
    document.getElementById("b").style.color = "#154bbb";
    document.getElementById("c").style.color = "#154bbb";
    document.getElementById("menu-container").style = "background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);";
    document.getElementById("container").style.background = "white";
    document.getElementById("input-menu").style = "background-color: white; box-shadow: 0px -4px 0px rgb(225,225,225) inset;";
    document.getElementById("search").style = "color: #2a2a2a;";
    document.getElementById("mode").style = "color: #154bbb;";
    document.getElementById("login").style = "color: #154bbb;";
    document.getElementById("version").style = "background: #e7e7e7; color: #154bbb;";

    var active = document.querySelectorAll('.jogos');
    var active2 = document.querySelectorAll('.titulojogo');
    for(var i = 0; i < active.length; i++) {
        active[i].style = "background-image: linear-gradient(90deg, #00c6fb 0%, #005bea 100%); box-shadow: 0px 0px 0px transparent;";
        active2[i].style = "background-image: linear-gradient(90deg, #00c6fb 0%, #005bea 100%); border-radius: 0px";

    }
}