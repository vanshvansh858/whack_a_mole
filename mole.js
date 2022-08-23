const holes = document.querySelectorAll(".hole");
const score = document.querySelector("#int");
const stop = document.querySelector("#stp");
const ref = document.querySelector("#re");

let total_score = 0;
let clear;

const Random_hole = () => {
  clear = setInterval(() => {
    let rand = Math.floor(Math.random() * 8);
    holes.forEach((e) => {
      e.classList.remove("mole");
    });
    holes[rand].classList.add("mole");
  }, 1000);

  for (let hole of holes) {
    hole.addEventListener("click", () => {
      if (hole.classList.contains("mole") === true) {
        total_score += 1;
        score.textContent = total_score;
        hole.classList.remove("mole");
      }
    });
  }
};

stop.addEventListener("click", () => {
  clearInterval(clear);
  holes.forEach((e) => {
    e.classList.remove("mole");
  });
});

ref.addEventListener("click", () => {
  total_score = 0;
  score.textContent = 0;
  Random_hole();
});

Random_hole();