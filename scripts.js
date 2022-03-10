//create 16x16 grid with JS
function createGrid() {
    for(let i = 0; i < 16; i ++) {
        for(let j = 0; j < 16; j++) {
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
}

window.addEventListener('load', createGrid);

function addColor() {
    this.classList.add('hovered');
}