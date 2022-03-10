//create 16x16 grid with JS
function createGrid(size = 16) {

    for(let i = 0; i < size; i ++) {
        for(let j = 0; j < size; j++) {
            //loop through sixteen rows and sixteen cols per row
            //create a new div for each (i,j) pair
            //figure out how to display them
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'grid-item');
            newDiv.addEventListener('mouseover', addColor);
            const container = document.querySelector(".container");
            container.appendChild(newDiv);
        }
    }
    setNumCols(size);
}

function setNumCols(size) {
    let colNumString = ""
    const container = document.querySelector(".container");
    for (let i = 0; i < size; i ++ ) {
        colNumString += "auto ";
    }
    console.log('colNumString', colNumString);
    container.setAttribute('style', `grid-template-columns: ${colNumString}`);
    
}

window.addEventListener('load', createGrid());



function addColor() {
    this.classList.add('hovered');
}

function clearGrid() {
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => square.classList.remove('hovered'));
    const answer = prompt("What size grid do you want? Answer in terms of the number of rows/cols");
    if (answer > 100 || answer < 0) {
        answer = 16;
    }
    const container = document.querySelector('.container');
    container.innerHTML = '';
    createGrid(answer);
}

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', clearGrid);