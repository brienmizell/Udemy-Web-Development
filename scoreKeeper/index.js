let p1Button = document.querySelector('#p1');
let p2Button = document.getElementById('p2');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display')
let p1Score = 0;
let p2Score = 0;
let gameover = false;
let winningScore = 5;

console.log(p1Display);

p1Button.addEventListener('click', function (){
    if(!gameover) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add('winner');
            gameover = true;
        }
        p1Display.textContent = p1Score
    }
    
});

p2Button.addEventListener('click', function () {
    if(!gameover) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add('winner');
            gameover = true;
        }
        p2Display.textContent = p2Score;
    }
})