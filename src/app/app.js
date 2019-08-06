const iconRight = document.querySelector(".slider-icon-right");
const iconLeft = document.querySelector(".slider-icon-left");
const sliderCards = document.querySelectorAll(".courses__list--slider-card");

iconRight.addEventListener("click", e => {
  iconLeft.classList.remove("hidden");
  iconRight.classList.add("hidden");

  for (i = 0; i <= 7; i++) {
    if (sliderCards[i].classList.value.includes("hidden")) {
      sliderCards[i].classList.remove("hidden");
    } else {
      sliderCards[i].classList.add("hidden");
    }
  }
});

iconLeft.addEventListener("click", e => {
  iconLeft.classList.add("hidden");
  iconRight.classList.remove("hidden");

  for (i = 0; i <= 7; i++) {
    if (sliderCards[i].classList.value.includes("hidden")) {
      sliderCards[i].classList.remove("hidden");
    } else {
      sliderCards[i].classList.add("hidden");
    }
  }
});
