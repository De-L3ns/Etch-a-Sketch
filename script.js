// functions

const gridContainer = document.querySelector('#grid');
amount = 256;


function createGrid(squares) { // creating the divs
    
    for (i = 0; i < squares; i += 1) {
    const squareDiv = document.createElement('div');
    gridContainer.appendChild(squareDiv);

    }
}

createGrid(amount);