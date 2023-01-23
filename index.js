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
  isNaN(qpercent) ? (qpercent = 0) : qpercent;

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
  isNaN(apercent) ? (apercent = 0) : apercent;

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
  isNaN(wpercent) ? (wpercent = 0) : wpercent;

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
  isNaN(mpercent) ? (mpercent = 0) : mpercent;

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
  isNaN(fpercent) ? (fpercent = 0) : fpercent;

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

// Save input values to LocalStorage when user leaves the page
window.onbeforeunload = function () {
  localStorage.setItem("quizzesweight", quizzes.querySelector("input").value);
  localStorage.setItem(
    "assignmentsweight",
    assignments.querySelector("input").value
  );
  localStorage.setItem("webassweight", webass.querySelector("input").value);
  localStorage.setItem("midtermsweight", midterms.querySelector("input").value);
  localStorage.setItem("finalsweight", finals.querySelector("input").value);

  let quizzesgrades = quizzes.querySelectorAll("input");
  for (let i = 1; i < quizzesgrades.length; i++) {
    localStorage.setItem("quizzesgrade" + i, quizzesgrades[i].value);
  }

  let assignmentsgrades = assignments.querySelectorAll("input");
  for (let i = 1; i < assignmentsgrades.length; i++) {
    localStorage.setItem("assignmentsgrade" + i, assignmentsgrades[i].value);
  }

  let webassgrades = webass.querySelectorAll("input");
  for (let i = 1; i < webassgrades.length; i++) {
    localStorage.setItem("webassgrade" + i, webassgrades[i].value);
  }

  let midtermsgrades = midterms.querySelectorAll("input");
  for (let i = 1; i < midtermsgrades.length; i++) {
    localStorage.setItem("midtermsgrade" + i, midtermsgrades[i].value);
  }

  let finalsgrades = finals.querySelectorAll("input");
  for (let i = 1; i < finalsgrades.length; i++) {
    localStorage.setItem("finalsgrade" + i, finalsgrades[i].value);
  }

  // Save the number of input fields for each category in LocalStorage
  localStorage.setItem("quizzeslength", quizzesgrades.length);
  localStorage.setItem("assignmentslength", assignmentsgrades.length);
  localStorage.setItem("webasslength", webassgrades.length);
  localStorage.setItem("midtermslength", midtermsgrades.length);
  localStorage.setItem("finalslength", finalsgrades.length);
};

// Restore input values from LocalStorage on first load
window.onload = function () {
  quizzes.querySelector("input").value =
    localStorage.getItem("quizzesweight") || "";
  assignments.querySelector("input").value =
    localStorage.getItem("assignmentsweight") || "";
  webass.querySelector("input").value =
    localStorage.getItem("webassweight") || "";
  midterms.querySelector("input").value =
    localStorage.getItem("midtermsweight") || "";
  finals.querySelector("input").value =
    localStorage.getItem("finalsweight") || "";

  let quizzesgrades = quizzes.querySelectorAll("input");
  for (let i = 1; i < quizzesgrades.length; i++) {
    quizzesgrades[i].value = localStorage.getItem("quizzesgrade" + i) || "";
  }

  // Check if the number of input fields in LocalStorage is different from the current number
  let quizzeslength = localStorage.getItem("quizzeslength") || 0;
  if (quizzesgrades.length < quizzeslength) {
    // If there are less input fields on the page than in LocalStorage, create the missing input fields
    for (let i = quizzesgrades.length; i < quizzeslength; i++) {
      let addbtn = quizzes.querySelectorAll("button.add.button.buttont");
      let grade = localStorage.getItem("quizzesgrade" + i);
      addbtn[0].insertAdjacentHTML(
        "beforebegin",
        `<div class="week" style="position: relative"><input type="number" id="input" placeholder="Week ${quizzeslength}" value="${grade}"/><button class="x button buttont" style="position: absolute; top: -.25rem; right: -.25rem;"><b>+</b></button></div>`
      );
      closingButtons();
      recalculate();
      bindInputs();
    }
  }

  let assignmentsgrades = assignments.querySelectorAll("input");
  for (let i = 1; i < assignmentsgrades.length; i++) {
    assignmentsgrades[i].value =
      localStorage.getItem("assignmentsgrade" + i) || "";
  }
  // Same check as above for assignments
  let assignmentslength = localStorage.getItem("assignmentslength") || 0;
  if (assignmentsgrades.length < assignmentslength) {
    for (let i = assignmentsgrades.length; i < assignmentslength; i++) {
      let addbtn = assignments.querySelectorAll("button.add.button.buttont");
      let grade = localStorage.getItem("assignmentsgrade" + i);
      addbtn[0].insertAdjacentHTML(
        "beforebegin",
        `<div class="week" style="position: relative"><input type="number" id="input" placeholder="Week ${assignmentslength}" value="${grade}"/><button class="x button buttont" style="position: absolute; top: -.25rem; right: -.25rem;"><b>+</b></button></div>`
      );
      closingButtons();
      recalculate();
      bindInputs();
    }
  }

  // Repeat the same checks for web assignments, midterms and finals
  let webassgrades = webass.querySelectorAll("input");
  for (let i = 1; i < webassgrades.length; i++) {
    webassgrades[i].value = localStorage.getItem("webassgrade" + i) || "";
  }
  let webasslength = localStorage.getItem("webasslength") || 0;
  if (webassgrades.length < webasslength) {
    for (let i = webassgrades.length; i < webasslength; i++) {
      let addbtn = webass.querySelectorAll("button.add.button.buttont");
      let grade = localStorage.getItem("webassgrade" + i);
      addbtn[0].insertAdjacentHTML(
        "beforebegin",
        `<div class="week" style="position: relative"><input type="number" id="input" placeholder="Week ${webasslength}" value="${grade}"/><button class="x button buttont" style="position: absolute; top: -.25rem; right: -.25rem;"><b>+</b></button></div>`
      );
      closingButtons();
      recalculate();
      bindInputs();
    }
  }

  let midtermsgrades = midterms.querySelectorAll("input");
  for (let i = 1; i < midtermsgrades.length; i++) {
    midtermsgrades[i].value = localStorage.getItem("midtermsgrade" + i) || "";
  }
  let midtermslength = localStorage.getItem("midtermslength") || 0;
  if (midtermsgrades.length < midtermslength) {
    for (let i = midtermsgrades.length; i < midtermslength; i++) {
      let addbtn = midterms.querySelectorAll("button.add.button.buttont");
      let grade = localStorage.getItem("midtermsgrade" + i);
      addbtn[0].insertAdjacentHTML(
        "beforebegin",
        `<div class="week" style="position: relative"><input type="number" id="input" placeholder="Week ${midtermslength}" value="${grade}"/><button class="x button buttont" style="position: absolute; top: -.25rem; right: -.25rem;"><b>+</b></button></div>`
      );
      closingButtons();
      recalculate();
      bindInputs();
    }
  }

  let finalsgrades = finals.querySelectorAll("input");
  for (let i = 1; i < finalsgrades.length; i++) {
    finalsgrades[i].value = localStorage.getItem("finalsgrade" + i) || "";
  }
  let finalslength = localStorage.getItem("finalslength") || 0;
  if (finalsgrades.length < finalslength) {
    for (let i = finalsgrades.length; i < finalslength; i++) {
      let addbtn = finals.querySelectorAll("button.add.button.buttont");
      let grade = localStorage.getItem("finalsgrade" + i);
      addbtn[0].insertAdjacentHTML(
        "beforebegin",
        `<div class="week" style="position: relative"><input type="number" id="input" placeholder="Week ${finalslength}" value="${grade}"/><button class="x button buttont" style="position: absolute; top: -.25rem; right: -.25rem;"><b>+</b></button></div>`
      );
      closingButtons();
      recalculate();
      bindInputs();
    }
  }
};
