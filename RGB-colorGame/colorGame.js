let colors = generateRandomColors(6);


// let colors = [
//     'rgb(255, 0, 0)',
//     'rgb(255, 255, 0)',
//     'rgb(0, 255, 0)',
//     'rgb(0, 255, 255)',
//     'rgb(0, 0, 255)',
//     'rgb(255, 0, 255)'
// ]

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message')

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener('click', function () {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        console.log(clickedColor, pickedColor)
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = '#232323'
            messageDisplay.textContent = 'Try Again'
        }
    });
};

function changeColors(color) {
    // loop through all squares
    for(var i = 0; i < squares.length; i++)
    // change each color to match given color
    squares[i].style.backgroundColor = color;
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    // repeat num times
    for(var i = 0; i < num; i++) {
        // get random color and pus into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
};

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
};