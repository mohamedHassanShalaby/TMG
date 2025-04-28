let menu = document.querySelector(".menu");
let links = document.querySelector(".links");
let close = document.querySelector(".close");
menu.onclick = function () {
  links.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block"
};
close.onclick = function () {
  links.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none"
};
