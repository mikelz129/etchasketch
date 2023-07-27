// Global Variables
let dimension = 1;
let rowNum = 1;

// Determine width and height of EtchASketch
const getSize = function() {
    dimension = prompt('Dimension?',16);
}

// Create Row 
const createRow = function() {
    const etchBox = document.querySelector('#etch');
    const addDiv = document.createElement('div');
    addDiv.classList.add('row',rowNum);
    etchBox.appendChild(addDiv);
}

// Create Cell


// Create Grid
const createGrid = function() {
    console.log('hello')
    console.log('first dim',dimension)
    // const etchBox = document.querySelector('#etch');
    for (let i = 0; i < dimension; i++) {
        createRow();
        rowNum++;
        console.log(i);
    }
}
