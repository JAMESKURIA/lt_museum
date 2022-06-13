const img = document.getElementById("img");
const contents = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".scroll");
let count = 0;
const time = 3000;

const images = [
  { id: 1, src: "./images/image1.jpg" },
  { id: 2, src: "./images/monalisa.jpg" },
  { id: 3, src: "./images/image3.jpg" },
];

const reset = () => {
  contents.forEach((content) => (content.style.display = "none"));
  btns.forEach((btn) => (btn.style.backgroundColor = "#eee"));
};

const slide = () => {
  reset();
  //   console.log(`Count ${count}`);
  if (count >= contents.length) {
    count = 0;
  }

  img.src = images[count].src;
  contents[count].style.display = "flex";
  contents[count].classList.add("visible");
  btns[count].style.backgroundColor = "tomato";

  count++;

  setTimeout(slide, time);
};

slide();

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    reset();
    btn.style.backgroundColor = "tomato";

    contents[idx].style.display = "flex";
    contents[idx].classList.add("visible");

    img.src = images[idx].src;

    img.classList.add("visible");
  });
});
