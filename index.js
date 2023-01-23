let totaltext = document.getElementById("totaltext");
let assignments = document.getElementById("assignments");
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
  // quizzes
  let quizzesweight = quizzes.querySelector("input").value;
  let quizzesgrades = quizzes.querySelectorAll("input");
  let quizzestotal = 0;
  for (let i = 1; i < quizzesgrades.length; i++) {
    quizzestotal += isNaN(parseInt(quizzesgrades[i].value))
      ? 0
      : parseInt(quizzesgrades[i].value);
  }
  let qpercent = (quizzestotal / ((quizzesgrades.length - 1) * 100)) * 100;

  // assignments
  let assignmentsweight = assignments.querySelector("input").value;
  let assignmentsgrades = assignments.querySelectorAll("input");
  let assignmentstotal = 0;
  for (let i = 1; i < assignmentsgrades.length; i++) {
    assignmentstotal += isNaN(parseInt(assignmentsgrades[i].value))
      ? 0
      : parseInt(assignmentsgrades[i].value);
  }
  let apercent =
    (assignmentstotal / ((assignmentsgrades.length - 1) * 100)) * 100;

  // total
  let tpercent =
    qpercent * (quizzesweight / 100).toFixed(2) +
    apercent * (assignmentsweight / 100).toFixed(2);
  totaltext.style.color = colors[Math.floor(tpercent / 10)];
  letter.innerText = letters[Math.floor(tpercent / 10)];
  grade.innerText = tpercent + "%";
}

function bindInputs() {
  // quizzes
  let quizzesgrades = quizzes.querySelectorAll("input");
  for (let i = 0; i < quizzesgrades.length; i++) {
    quizzesgrades[i].onchange = function () {
      quizzesgrades[i].value < 0
        ? (quizzesgrades[i].value = 0)
        : quizzesgrades[i].value;
      quizzesgrades[i].value > 100
        ? (quizzesgrades[i].value = 100)
        : quizzesgrades[i].value;
      recalculate();
    };
  }

  // assignments
  let assignmentsgrades = assignments.querySelectorAll("input");
  for (let i = 0; i < assignmentsgrades.length; i++) {
    assignmentsgrades[i].onchange = function () {
      assignmentsgrades[i].value < 0
        ? (assignmentsgrades[i].value = 0)
        : assignmentsgrades[i].value;
      assignmentsgrades[i].value > 100
        ? (assignmentsgrades[i].value = 100)
        : assignmentsgrades[i].value;
      recalculate();
    };
  }
}
bindInputs();

let addbuttons = document.querySelectorAll("button.add.button.buttont");
for (let i = 0; i < addbuttons.length; i++) {
  addbuttons[i].addEventListener("click", function () {
    let quizzesgrades = addbuttons[i].parentNode.querySelectorAll("input");
    addbuttons[i].insertAdjacentHTML(
      "beforebegin",
      `<div class="week" style="position: relative"><input type="number" id="input" placeholder="Week ${quizzesgrades.length}"/><button class="x button buttont" style="position: absolute; top: -.25rem; right: -.25rem;"><b>+</b></button></div>`
    );
    closingButtons();
    recalculate();
    bindInputs();
  });
}

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
