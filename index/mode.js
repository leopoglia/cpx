function pedro(){
    document.querySelector('a').style = 'color: #154bbb;';
    document.body.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";

    document.getElementById("a").style.color = "#154bbb";
    document.getElementById("b").style.color = "#154bbb";
    document.getElementById("c").style.color = "#154bbb";
    document.getElementById("menu-container").style = "background: linear-gradient(100deg, rgba(0,58,183,1) 0%, rgba(0,102,193,1) 100%);";
    document.getElementById("container").style.background = "white";
    document.getElementById("input-menu").style = "background-color: white; box-shadow: 0px -4px 0px rgb(225,225,225) inset;";
    document.getElementById("search").style = "color: #2a2a2a;";
    document.getElementById("mode").style = "color: #154bbb;";
    document.getElementById("login").style = "color: #154bbb;";
    document.getElementById("version").style = "background: #e7e7e7; color: #154bbb;";

    var active = document.querySelectorAll('.jogos');
    for(var i = 0; i < active.length; i++) {
        active[i].style = "background-color: #154bbb; box-shadow: 0px 0px 0px transparent;";
    }
}