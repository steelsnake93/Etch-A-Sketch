let color = "black";

// Create 16x16 grid square div's.
function populateBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}
populateBoard(16); 

// Change size value and set limitations to 100 squares.
function changeSize(input){
    if(input >= 2 && input <= 100){
    populateBoard(input)
    } else {
        console.log("To many squares!");
    }
}

// Random color.
function colorSquare() {
    if((color === "random")) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

// Reset 
function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}