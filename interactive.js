let canvas = document.getElementById("gameCanvas");
let canvasContext = canvas.getContext("2d");

let paddleWidth = 150;

function createRectangle(color, x, y, width, height) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function createBrickLayer() {
    let brickWidth = 50;
    let brickHeight = 20;
    let brickEnd = 0;
    while (brickEnd < canvas.width) {
        createRectangle("black", brickEnd + 10, 10, brickWidth, brickHeight);
        console.log(brickEnd);
        brickEnd += brickWidth + 10;
    }
}

setInterval(function() { 
    createRectangle('green', 0, 0, canvas.width, canvas.height);
    createRectangle('purple', 50, 50, 50, 50);
    createRectangle('purple', 150, 50, 50, 50);
    createRectangle('red', 20, 150, 150, 25);
    createBrickLayer();
    createRectangle('blue', (canvas.width/2) - (paddleWidth/2), canvas.height - 20, paddleWidth, 10);
}, 1000);