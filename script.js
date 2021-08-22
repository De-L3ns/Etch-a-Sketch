// functions

function createGrid(squares) { // creating the divs
    
    for (i = 0; i < squares; i += 1) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    gridContainer.appendChild(squareDiv);
    

    }
}


// variables and gameloop 
const gridContainer = document.querySelector('#grid');
let amount = 256;
createGrid(amount);

const getSquares = document.querySelectorAll('.square'); // this checks all div's with a .square class and 
getSquares.forEach(square => {                            // changes the background-color to blue when hovered
    square.addEventListener('mouseover', function(e) {
        e.target.style.background = 'blue';
    })
})


