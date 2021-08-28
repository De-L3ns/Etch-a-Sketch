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

function manipulateGridColorMode() {
    const getSquares = document.querySelectorAll('.square'); // This checks all div's with a .square class and 
    getSquares.forEach(square => {                            // changes the background-color to blue when hovered
        square.addEventListener('mouseover', function(e) {
            e.target.style.background = getRandomColor();
        })
    })
}

function removeChilds(parent) { // This loop removes the parent divs until there are
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let colorCode = '#';
    for (let i = 0; i < 6; i++) {
        colorCode += letters[Math.floor(Math.random() * 16)];   
    }
    return colorCode;
}

// variables and logic 
const gridContainer = document.querySelector('#grid');
let squareAmount = 256;
let colorMode = false;
createGrid(squareAmount); // Initialises the basic 16x16 grid 
if (colorMode) {
    manipulateGridColorMode()
} else {
    manipulateGrid();
}

// button logic
const resetGrid = document.getElementById('reset'); // Clears the grid and sets it back to it's original state
resetGrid.addEventListener('click', () => {
    removeChilds(gridContainer);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr);`);
    createGrid(squareAmount);
    if (colorMode) {
        manipulateGridColorMode()
    } else {
        manipulateGrid();
    }
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
        if (colorMode) {
            manipulateGridColorMode()
        } else {
            manipulateGrid();
        }
    }
});


const colorModeBox = document.getElementById('color-mode'); // Check if the checkbox is turned on
colorModeBox.addEventListener('change', function() {
    if (colorModeBox.checked) { // if it is, set colorMode to true and reset the grid for the changes to take effect
        colorMode = true;
        removeChilds(gridContainer);
        gridContainer.setAttribute('style', `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr);`);
        createGrid(squareAmount);
        manipulateGridColorMode();
    } else { // if it is not, set colorMode to False and reset the grid for the changes to take effect
        colorMode = false;
        removeChilds(gridContainer);
        gridContainer.setAttribute('style', `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr);`);
        createGrid(squareAmount);
        manipulateGrid();
    }   
})


