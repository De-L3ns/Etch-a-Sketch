// functions

function createGrid(squares) { // Creating the divs for the grid
    
    for (i = 0; i < squares; i += 1) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    gridContainer.appendChild(squareDiv);
    

    }
}
function manipulateGrid() {
    const getSquares = document.querySelectorAll('.square'); // This checks all div's with a .square class and 
    getSquares.forEach(square => {                            // changes the background-color to blue when hovered
        square.addEventListener('mouseover', function(e) {
            e.target.style.background = 'blue';
        })
    })
}

function removeChilds(parent) { // This loop removes the parent divs until there are
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// variables and logic 
const gridContainer = document.querySelector('#grid');
let squareAmount = 256;
createGrid(squareAmount); // Initialises the basic 16x16 grid 
manipulateGrid(); // Initialises the ability to change grid color when hovering

// button logic
const resetGrid = document.getElementById('reset'); // Clears the grid and sets it back to it's original state
resetGrid.addEventListener('click', () => {
    removeChilds(gridContainer);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr);`);
    createGrid(squareAmount);
    manipulateGrid();
});

const getInput = document.getElementById('input'); // Gets user input from the text field and applies it to the grid
getInput.addEventListener('click', () => {
    let value = document.getElementById('grid-value').value;
    if (value > 100) {
        alert('Please enter a number below 100');
    }
    else {
        removeChilds(gridContainer);
        gridContainer.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
        createGrid(value*value);
        manipulateGrid();
    }
});

