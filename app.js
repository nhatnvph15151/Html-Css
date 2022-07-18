// scroll menu
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("stick", window.scrollY > 0);
})
// back to top
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 50
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// menu Item
var navTab = document.getElementById("tab-nav")
var contentNav = document.getElementById("content_nav")
var menuItems = document.querySelectorAll('nav ul li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function () {
        console.log(this)
        contentNav.style.maxHeight = "0"
        navTab.addEventListener("click", function () {
            contentNav.style.maxHeight = "100vh"
            contentNav.style.background = "#1dc8cd"
        })
    }



}


