let firstAngle = document.querySelector('.first');
let secondAngle = document.querySelector('.second');
let thirdAngle = document.querySelector('.third');
let triangleResultDiv = document.querySelector('.triangle-result');

let a = document.querySelector('.a');
let b = document.querySelector('.b');
let hypoResultDiv = document.querySelector('.hypo-result');

let generateAngleBtn = document.querySelector('.generate-angle');
let firstAngleDiv = document.querySelector('.first-angle');
let secondAngleDiv = document.querySelector('.second-angle');
let thirdAngleInput = document.querySelector('.third-angle');
let angleResultDiv = document.querySelector('.angle-result');

let base = document.querySelector('.base');
let height = document.querySelector('.height');
let areaDiv = document.querySelector('.area');

let sum = 0, a_length, b_length, hypo_length = 0, correctAngle, thirdAngleGuess, area;

let formOne = document.querySelector('#one');
let formTwo = document.querySelector('#two');
let formThree = document.querySelector('#three');
let formFour = document.querySelector('#four');

let formFive = document.querySelector('#five');
let quizScore = document.querySelector('.quiz-score');
let quizDiv = document.querySelectorAll('.quiz-wrapper');

formOne.addEventListener('submit', function checkTriangle(e) {

    e.preventDefault();

    sum = Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);

    if(sum === 180) {
        triangleResultDiv.innerText = 'Yay, it forms a triangle :)';
    } else {
        triangleResultDiv.innerText = 'OOPS, it does not form a triangle :(';
    }
});

formTwo.addEventListener('submit', function getHypotenuse(e) {

    e.preventDefault();

    a_length = a.value;
    b_length = b.value;

    hypo_length = Math.sqrt((a_length * a_length) + (b_length * b_length));
    hypoResultDiv.innerText =  `The length of the hypotenuse is ${hypo_length} units.`;
});

generateAngleBtn.addEventListener('click', function generateAngle() {

    angle1 = Math.trunc(Math.random()*(180 - 0)) + 0;
    angle2 = Math.trunc(Math.random()*(180 - 0)) + 0;

    while(1) {

        if(angle1 + angle2 >= 180) {
            if(angle1> angle2) {
                angle1 = Math.trunc(Math.random()*(180 - 0)) + 0;
            } else {
                angle2 = Math.trunc(Math.random()*(180 - 0)) + 0;
            }
        } else {
            break;
        }
    }
    thirdAngleInput.value = '';
    firstAngleDiv.innerText = angle1;
    secondAngleDiv.innerText = angle2;
});

formThree.addEventListener('submit', function guessAngle(e) {

    e.preventDefault();

    thirdAngleGuess = Number(thirdAngleInput.value);
    correctAngle = 180 - Number(firstAngleDiv.innerText) - Number(secondAngleDiv.innerText);

    if(correctAngle === 180) {
        angleResultDiv.innerText = 'Generate angles to proceed.';
    } else {
        if(thirdAngleGuess === correctAngle) {
            angleResultDiv.innerText = 'Correct guess :)';
        } else {
            angleResultDiv.innerText = 'Incorrect guess :(';
        }        
    }    
});

formFour.addEventListener('submit', function calculateArea(e) {

    e.preventDefault();

    area = (base.value * height.value) * 0.5;
    areaDiv.innerText = `The area of the triangle is ${area} units.`;
});

let correctAns = ['3', 'Obtuse', '20units', 'True', '0', 'Acute', 'Isosceles', '75°', 'Equilateral', 'No'];

formFive.addEventListener('submit', function formQuiz(e) {

    e.preventDefault();

    let index = 0, score = 0;

    let formResult = new FormData(formFive);
    // console.log(...formResult);

    for(let [, value] of formResult) {
        if(value === correctAns[index]) {
            score += 1;
            quizDiv[index].style.border = '0.13rem solid rgb(36, 160, 36)';
        } else {
            quizDiv[index].style.border = '0.13rem solid red';
        }
        index += 1;
    }
    quizScore.innerText = `Score: ${score}/10`;
});