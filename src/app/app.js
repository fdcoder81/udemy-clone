const iconRight = document.querySelector(".slider-icon-right");
const iconLeft = document.querySelector(".slider-icon-left");
const sliderCards = document.querySelectorAll(".courses__list--slider-card");
const toggleContainer = document.querySelector(".toggle__container");
const toggle = document.querySelector(".toggle__icon");
const toggleContent = document.querySelector(".toggle__content");
const toggleClose = document.querySelector(".toggle__icon-close");

toggleContainer.addEventListener("click", e => {
  if (toggleContent.classList.value.includes("hidden")) {
    toggleContent.classList.remove("hidden");
    toggle.classList.add("hidden");
    toggleClose.classList.remove("hidden");
  } else {
    toggleContent.classList.add("hidden");
    toggle.classList.remove("hidden");
    toggleClose.classList.add("hidden");
  }
});

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
