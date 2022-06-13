const imgs = document.querySelectorAll(".img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    document.location.href = "./products";
  });
});
