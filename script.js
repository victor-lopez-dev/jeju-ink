let navBtn = document.getElementById("nav-btn");
let navBtnClose = document.getElementById("nav-btn-close");
let navMenu = document.querySelector(".nav-menu");

let navLinks = document.querySelectorAll("nav-link-mobile");
let body1 = document.body;

navBtn.addEventListener("click", function() {
  navMenu.classList.toggle("display-menu");
  navBtnClose.classList.toggle("display-menu");
  body1.classList.toggle("display-menu");
});

navBtnClose.addEventListener("click", function() {
  navMenu.classList.toggle("display-menu");
  navBtnClose.classList.toggle("display-menu");
  body1.classList.toggle("display-menu");
});


document.querySelectorAll('.nav-link-mobile').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('display-menu');
    body1.classList.toggle("display-menu");
    navBtnClose.classList.toggle("display-menu");
  });
});