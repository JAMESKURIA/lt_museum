const menu = document.querySelector(".side-menu");
const hamburger = document.querySelector(".menu");

const toggleMenu = () => {
  menu.classList.toggle("show");
};

hamburger.addEventListener("click", toggleMenu);
