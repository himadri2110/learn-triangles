let firstAngle = document.querySelector('.first');
let secondAngle = document.querySelector('.second');
let thirdAngle = document.querySelector('.third');
let triangleResultDiv = document.querySelector('.triangle-result');

let a = document.querySelector('.a');
let b = document.querySelector('.b');
let hypoResultDiv = document.querySelector('.hypo-result');

let firstAngleDiv = document.querySelector('.first-angle');
let secondAngleDiv = document.querySelector('.second-angle');
let thirdAngleInput = document.querySelector('.third-angle');
let angleResultDiv = document.querySelector('.angle-result');

let base = document.querySelector('.base');
let height = document.querySelector('.height');
let areaDiv = document.querySelector('.area');

let sum = 0, a_length, b_length, hypo_length = 0, correctAngle, thirdAngleGuess, area;

function checkTriangle() {

    if(firstAngle.value == '' || secondAngle.value == '' || thirdAngle.value == '') {
        triangleResultDiv.innerText = 'Please enter all the values';
        triangleResultDiv.style.color = 'red';
    } else {
        sum = Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);

        triangleResultDiv.style.color = 'initial';
        if(sum === 180) {
            triangleResultDiv.innerText = 'Yay, it forms a triangle';
        } else {
            triangleResultDiv.innerText = 'OOPS, it does not form a triangle';
        }
    }
}

function getHypotenuse() {

    a_length = a.value;
    b_length = b.value;

    if(a_length == '' || b_length == '') {
        hypoResultDiv.innerText = 'Please enter all the values';
        hypoResultDiv.style.color = 'red';
    } else {
        hypoResultDiv.style.color = 'initial';

        hypo_length = Math.sqrt((a_length * a_length) + (b_length * b_length));
        hypoResultDiv.innerText =  `The length of the hypotenuse is ${hypo_length}`;
    }
}

function generateAngle() {

    angle1 = Math.trunc(Math.random()*(180 - 0)) + 0;
    angle2 = Math.trunc(Math.random()*(180 - 0)) + 0;

    console.log(angle1, angle2, '42');
    while(1) {

        if(angle1 + angle2 >= 180) {
            if(angle1> angle2) {
                angle1 = Math.trunc(Math.random()*(180 - 0)) + 0;
            } else {
                angle2 = Math.trunc(Math.random()*(180 - 0)) + 0;
            }
            console.log(angle1, angle2, '52');
        } else {
            break;
        }
    }

    firstAngleDiv.innerText = angle1;
    secondAngleDiv.innerText = angle2;
}

function guessAngle() {

    if(thirdAngleInput.value == '' || firstAngleDiv.innerText == '' || secondAngleDiv.innerText == '') {
        angleResultDiv.innerText = 'Please enter all the values';
        angleResultDiv.style.color = 'red';
    } else {
        angleResultDiv.style.color = 'initial';

        thirdAngleGuess = Number(thirdAngleInput.value);
        correctAngle = 180 - Number(firstAngleDiv.innerText) - Number(secondAngleDiv.innerText);
    
        if(thirdAngleGuess === correctAngle) {
            angleResultDiv.innerText = 'Correct guess';
        } else {
            angleResultDiv.innerText = 'Incorrect guess';
        }    
    }
}

function calculateArea() {

    if(base.value == '' || height.value == '') {
        areaDiv.innerText = 'Please enter all the values';
        areaDiv.style.color = 'red';
    } else {
        areaDiv.style.color = 'initial';

        area = (base.value * height.value) * 0.5;
        areaDiv.innerText = `The area of the triangle is ${area} units`;
    }
}