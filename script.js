const container = document.querySelector('#container');
const gridSizeButton = document.querySelector('#gridSizeButton');
const reset = document.querySelector('#reset');
let gridSize = 16;
createGrid();
gridSizeButton.addEventListener('click', userInputGridSize);
reset.addEventListener('click', resetGrid);

function createGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < gridSize; i++)
    {
        let row = document.createElement('div');
        row.classList.add('row');

        for(let a = 0; a < gridSize; a++) 
        {
            let content = document.createElement('div');
            content.classList.add('content');
            row.appendChild(content);
        }

        container.appendChild(row);
    }
    container.addEventListener('mouseover', handleMouseOver);

}


function userInputGridSize()
{
    let userInput = 0;
    let validInput = 0;
    while(validInput != 1)
    {
        userInput = prompt("Please enter a new grid size! Use Integers between 2 and 100!");
        userInput = parseInt(userInput, 10);
        if(typeof userInput === 'number' && isFinite(userInput))
        {
            if(userInput >= 2 && userInput <= 100) validInput = 1;
        }
    }
    gridSize = userInput;
    createGrid();
}

function handleMouseOver(event) {
    const target = event.target;
    if (target.classList.contains('content')) {
        target.classList.add('hovered');
    }
}

function resetGrid() {
    container.removeEventListener('mouseover', handleMouseOver);
    createGrid();
}