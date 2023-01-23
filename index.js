let totaltext = document.getElementById("totaltext");
let finals = document.getElementById("finals");
let midterms = document.getElementById("midterms");
let webass = document.getElementById("webass");
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

  // webass
  let webassweight = webass.querySelector("input").value;
  let webassgrades = webass.querySelectorAll("input");
  let webasstotal = 0;
  for (let i = 1; i < webassgrades.length; i++) {
    webasstotal += isNaN(parseInt(webassgrades[i].value))
      ? 0
      : parseInt(webassgrades[i].value);
  }
  let wpercent = (webasstotal / ((webassgrades.length - 1) * 100)) * 100;

  // midterms
  let midtermsweight = midterms.querySelector("input").value;
  let midtermsgrades = midterms.querySelectorAll("input");
  let midtermstotal = 0;
  for (let i = 1; i < midtermsgrades.length; i++) {
    midtermstotal += isNaN(parseInt(midtermsgrades[i].value))
      ? 0
      : parseInt(midtermsgrades[i].value);
  }
  let mpercent = (midtermstotal / ((midtermsgrades.length - 1) * 100)) * 100;

  // finals
  let finalsweight = finals.querySelector("input").value;
  let finalsgrades = finals.querySelectorAll("input");
  let finalstotal = 0;
  for (let i = 1; i < finalsgrades.length; i++) {
    finalstotal += isNaN(parseInt(finalsgrades[i].value))
      ? 0
      : parseInt(finalsgrades[i].value);
  }
  let fpercent = (finalstotal / ((finalsgrades.length - 1) * 100)) * 100;

  // total
  let tpercent =
    qpercent * (quizzesweight / 100).toFixed(2) +
    apercent * (assignmentsweight / 100).toFixed(2) +
    wpercent * (webassweight / 100).toFixed(2) +
    mpercent * (midtermsweight / 100).toFixed(2) +
    fpercent * (finalsweight / 100).toFixed(2);
  totaltext.style.color = colors[Math.floor(tpercent / 10)];
  letter.innerText = letters[Math.floor(tpercent / 10)];
  grade.innerText = tpercent.toFixed(2) + "%";
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

  // webass
  let webassgrades = webass.querySelectorAll("input");
  for (let i = 0; i < webassgrades.length; i++) {
    webassgrades[i].onchange = function () {
      webassgrades[i].value < 0
        ? (webassgrades[i].value = 0)
        : webassgrades[i].value;
      webassgrades[i].value > 100
        ? (webassgrades[i].value = 100)
        : webassgrades[i].value;
      recalculate();
    };
  }

  // midterms
  let midtermsgrades = midterms.querySelectorAll("input");
  for (let i = 0; i < midtermsgrades.length; i++) {
    midtermsgrades[i].onchange = function () {
      midtermsgrades[i].value < 0
        ? (midtermsgrades[i].value = 0)
        : midtermsgrades[i].value;
      midtermsgrades[i].value > 100
        ? (midtermsgrades[i].value = 100)
        : midtermsgrades[i].value;
      recalculate();
    };
  }

  // finals
  let finalsgrades = finals.querySelectorAll("input");
  for (let i = 0; i < finalsgrades.length; i++) {
    finalsgrades[i].onchange = function () {
      finalsgrades[i].value < 0
        ? (finalsgrades[i].value = 0)
        : finalsgrades[i].value;
      finalsgrades[i].value > 100
        ? (finalsgrades[i].value = 100)
        : finalsgrades[i].value;
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

closingButtons();
