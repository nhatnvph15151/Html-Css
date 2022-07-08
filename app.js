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