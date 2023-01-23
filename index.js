let totaltext = document.getElementById("totaltext");
let quizzes = document.getElementById("quizzes");
let letter = document.getElementById("letter");
let grade = document.getElementById("grade");
const letters = ["E", "E", "E", "E", "E", "E", "D", "C", "B", "A", "A++"];
const colors = [
  "#ff6666",
  "#ff6666",
  "#ff6666",
  "#ff6666",
  "#ff6666",
  "#ff6666",
  "#ff8666",
  "#face78",
  "#7dd6b0",
  "#aed073",
  "#aed073",
];
function recalculate() {
  // get value of first input
  let quizzesweight = quizzes.querySelector("input").value;
  quizzesweight < 0 ? (quizzesweight = 0) : quizzesweight;
  quizzesweight > 100 ? (quizzesweight = 100) : quizzesweight;
  let quizzesgrades = quizzes.querySelectorAll("input");
  let total = 0;
  for (let i = 1; i < quizzesgrades.length; i++) {
    quizzesgrades[i].value < 0
      ? (quizzesgrades[i].value = 0)
      : quizzesgrades[i].value;
    quizzesgrades[i].value > 100
      ? (quizzesgrades[i].value = 100)
      : quizzesgrades[i].value;
    total += isNaN(parseInt(quizzesgrades[i].value))
      ? 0
      : parseInt(quizzesgrades[i].value);
  }
  grade.innerText =
    ((total / ((quizzesgrades.length - 1) * 100)) * 100).toFixed(2) + "%";

  letter.innerText =
    letters[
      Math.floor(
        ((total / ((quizzesgrades.length - 1) * 100)) * 100).toFixed(2) / 10
      )
    ];
  console.log(totaltext.style.color);

  totaltext.style.color =
    colors[
      Math.floor(
        ((total / ((quizzesgrades.length - 1) * 100)) * 100).toFixed(2) / 10
      )
    ];

  console.log(totaltext.style.color);
}

function bindInputs() {
  let quizzesgrades = quizzes.querySelectorAll("input");
  for (let i = 0; i < quizzesgrades.length; i++) {
    quizzesgrades[i].onchange = function () {
      console.warn(quizzesgrades[i].value);
      recalculate();
    };
  }
}
bindInputs();

let addquiz = document.getElementById("addquiz");
addquiz.addEventListener("click", function () {
  // get last div with class "week"
  let quizzesgrades = quizzes.querySelectorAll("input");

  let lastquiz = quizzes.getElementsByClassName("week");
  lastquiz[lastquiz.length - 1].insertAdjacentHTML(
    "afterend",
    `<div class="week" style="position: relative"><input type="number" id="input" placeholder="Week ${quizzesgrades.length}"/><button class="x button buttont" style="position: absolute; top: -.25rem; right: -.25rem;"><b>+</b></button></div>`
  );
  closingButtons();
  recalculate();
  bindInputs();
});

function closingButtons() {
  let xbuttons = document.querySelectorAll("button.x.button.buttont");
  for (let i = 0; i < xbuttons.length; i++) {
    xbuttons[i].addEventListener("click", function () {
      this.parentNode.remove();
      recalculate();
      bindInputs();
    });
  }
}
