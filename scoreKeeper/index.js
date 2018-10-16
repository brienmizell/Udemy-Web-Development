let p1Button = document.querySelector('#p1');
let p2Button = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display')
let p1Score = 0;
let p2Score = 0;

console.log(p1Display);

p1Button.addEventListener('click', function (){
    p1Score++;

    p1Display.textContent = p1Score
})

p2Button.addEventListener('click', function () {
    p2Score++;
    p2Display.textContent = p2Score;
})