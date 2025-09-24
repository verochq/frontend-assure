document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const count = document.querySelector(".count");
  const image = document.querySelector(".image");

  btn.addEventListener("click", () => {
    count.textContent = ++count.textContent;
    if (count.textContent % 2 === 0) {
      image.src = `img/cats0.png`;
    } else {
      image.src = `img/cats1.png`;
    }
  });
});
