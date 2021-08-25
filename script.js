// functions

function createGrid(squares) { // creating the divs
    
    for (i = 0; i < squares; i += 1) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    gridContainer.appendChild(squareDiv);
    

    }
}

function refreshGrid(squares) { // this sets all current squares in the grid back to 0.
    squares.forEach(square => {
        square.setAttribute('style', 'background: grey');
    })
}

// variables and logic 
const gridContainer = document.querySelector('#grid');
let squareAmount = 256;
createGrid(squareAmount);

const getSquares = document.querySelectorAll('.square'); // this checks all div's with a .square class and 
getSquares.forEach(square => {                            // changes the background-color to blue when hovered
    square.addEventListener('mouseover', function(e) {
        e.target.style.background = 'blue';
    })
})


const resetGrid = document.getElementById('reset');
console.log(resetGrid);
resetGrid.addEventListener('click', () => {
    refreshGrid(getSquares);
});

