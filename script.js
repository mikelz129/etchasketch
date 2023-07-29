// Global Variables
let dimension = 3;
let rowNum = 1;

// Determine width and height of EtchASketch
const getSize = function() {
    dimension = prompt('Dimension?',16);
}

// Create Row 
const createRow = function() {
    const etchBox = document.querySelector('#etch');
    const addDiv = document.createElement('div');
    addDiv.classList.add('row');
    addDiv.setAttribute('id', ('row' + rowNum));
    etchBox.appendChild(addDiv);
}

// Create Cell
const createCell = function() {
    const rowToAdd = document.querySelector('#row' + rowNum);
    const addCell = document.createElement('div');
    addCell.classList.add('cell');
    rowToAdd.appendChild(addCell);
}


// Create Grid
const createGrid = function() {
    console.log('hello')
    console.log('first dim',dimension)
    // const etchBox = document.querySelector('#etch');
    for (let i = 0; i < dimension; i++) {
        createRow();
        for (let c = 0; c < dimension; c++)
            createCell();
            rowNum++
    }
}

// Hover

