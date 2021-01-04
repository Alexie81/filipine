function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.onload = function(e) {
    document.getElementById("about").style.display = "none";
    document.getElementById("main").style.display = "inline";
}

function main() {
    document.getElementById("about").style.display = "none";
    document.getElementById("main").style.display = "inline";
    closeNav();
}

function about() {
    document.getElementById("about").style.display = "block";
    document.getElementById("main").style.display = "none";
    closeNav();
    setTimeout(function(){document.getElementById("about").style.width = "950px"}, 200)
    setTimeout(function(){document.getElementById("about").style.width = "600px"}, 1000)
}

function download() {
    closeNav();
}