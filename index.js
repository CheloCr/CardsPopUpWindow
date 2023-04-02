//todo DOM Elements

const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const btnCloseWindow = document.querySelectorAll(".close-modal");
const overlay = document.querySelectorAll(".overlay");

//todo Loop for the cards
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    modals[i].classList.remove("hidden");
    overlay[i].classList.remove("hidden");
  });

  document.addEventListener("keydown", (element) => {
    if (element.keyCode === 27 && !modals[i].classList.contains("hidden")) {
      modals[i].classList.add("hidden");
      overlay[i].classList.add("hidden");
    }
  });

  btnCloseWindow[i].addEventListener("click", () => {
    modals[i].classList.add("hidden");
    overlay[i].classList.add("hidden");
  });
}
