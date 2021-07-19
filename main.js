let firstAngle = document.querySelector('.first');
let secondAngle = document.querySelector('.second');
let thirdAngle = document.querySelector('.third');

let resultDiv = document.querySelector('.result');
let sum = 0;

function checkTriangle() {

    sum = Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);

    console.log(sum);
    if(sum === 180) {
        resultDiv.innerText = 'Yay, it forms a triangle';
    } else {
        resultDiv.innerText = 'OOPS, it does not form a triangle';
    }
}