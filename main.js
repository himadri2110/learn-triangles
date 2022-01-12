const firstAngle = document.querySelector(".first");
const secondAngle = document.querySelector(".second");
const thirdAngle = document.querySelector(".third");
const triangleResultDiv = document.querySelector(".triangle-result");

const a = document.querySelector(".a");
const b = document.querySelector(".b");
const hypoResultDiv = document.querySelector(".hypo-result");

const generateAngleBtn = document.querySelector(".generate-angle");
const firstAngleDiv = document.querySelector(".first-angle");
const secondAngleDiv = document.querySelector(".second-angle");
const thirdAngleInput = document.querySelector(".third-angle");
const angleResultDiv = document.querySelector(".angle-result");

const base = document.querySelector(".base");
const height = document.querySelector(".height");
const areaDiv = document.querySelector(".area");

let sum = 0,
  a_length,
  b_length,
  hypo_length = 0,
  correctAngle,
  thirdAngleGuess,
  area;

const formOne = document.querySelector("#one");
const formTwo = document.querySelector("#two");
const formThree = document.querySelector("#three");
const formFour = document.querySelector("#four");

const formFive = document.querySelector("#five");
const quizScore = document.querySelector(".quiz-score");
const quizDiv = document.querySelectorAll(".quiz-wrapper");

formOne.addEventListener("submit", (e) => {
  e.preventDefault();
  sum =
    Number(firstAngle.value) +
    Number(secondAngle.value) +
    Number(thirdAngle.value);

  if (sum === 180) {
    triangleResultDiv.innerText = "Yay, it forms a triangle :)";
  } else {
    triangleResultDiv.innerText = "OOPS, it does not form a triangle :(";
  }
});

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();

  a_length = a.value;
  b_length = b.value;

  hypo_length = Math.sqrt(a_length * a_length + b_length * b_length);
  hypoResultDiv.innerText = `The length of the hypotenuse is ${hypo_length} units.`;
});

generateAngleBtn.addEventListener("click", () => {
  angle1 = Math.trunc(Math.random() * (180 - 0)) + 0;
  angle2 = Math.trunc(Math.random() * (180 - 0)) + 0;

  while (1) {
    if (angle1 + angle2 >= 180) {
      if (angle1 > angle2) {
        angle1 = Math.trunc(Math.random() * (180 - 0)) + 0;
      } else {
        angle2 = Math.trunc(Math.random() * (180 - 0)) + 0;
      }
    } else {
      break;
    }
  }
  thirdAngleInput.value = "";
  firstAngleDiv.innerText = angle1;
  secondAngleDiv.innerText = angle2;
});

formThree.addEventListener("submit", (e) => {
  e.preventDefault();

  thirdAngleGuess = Number(thirdAngleInput.value);
  correctAngle =
    180 - Number(firstAngleDiv.innerText) - Number(secondAngleDiv.innerText);

  if (correctAngle === 180) {
    angleResultDiv.innerText = "Generate angles to proceed.";
  } else {
    if (thirdAngleGuess === correctAngle) {
      angleResultDiv.innerText = "Correct guess :)";
    } else {
      angleResultDiv.innerText = "Incorrect guess :(";
    }
  }
});

formFour.addEventListener("submit", (e) => {
  e.preventDefault();

  area = base.value * height.value * 0.5;
  areaDiv.innerText = `The area of the triangle is ${area} units.`;
});

const correctAns = [
  "3",
  "Obtuse",
  "20units",
  "True",
  "0",
  "Acute",
  "Isosceles",
  "75°",
  "Equilateral",
  "No",
];

formFive.addEventListener("submit", (e) => {
  e.preventDefault();

  let index = 0,
    score = 0;

  const formResult = new FormData(formFive);

  for (let [, value] of formResult) {
    if (value === correctAns[index]) {
      score += 1;
      quizDiv[index].style.border = "0.13rem solid rgb(36, 160, 36)";
    } else {
      quizDiv[index].style.border = "0.13rem solid red";
    }
    index += 1;
  }
  quizScore.innerText = `Score: ${score}/10`;
});
