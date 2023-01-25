// page element variables

const container = document.querySelector('.container');
const btn = document.querySelector('#size');
const cssRoot = document.querySelector(':root');

// initial grid size values as variables

let panelsPerSide = 16;
let totalPanels = panelsPerSide * panelsPerSide;

// function to change grid size in CSS

function setCSSGridSize() {
    cssRoot.style.setProperty('--panelsPerSide', `${panelsPerSide}`)
}

// function to get desired grid size from user

function setPanelsPerSide() {
    panelsPerSide = prompt('How many squares per side? (max 100');
    totalPanels = panelsPerSide * panelsPerSide;
}

// function to create the grid and set the mouseover effect

function createGrid () {
    for (let i = 0; i < totalPanels; i++) {
        let div = document.createElement('div');
        div.classList.add('panel');
        container.appendChild(div);
    }

    const panels = document.querySelectorAll('.panel');

    for (let panel of panels) {
        panel.addEventListener('mouseover', changeColour);
    };
}

// function to remove the grid

function removeGrid () {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

// function to recreate the grid with size from user input

function replaceGrid() {
    setPanelsPerSide()
    setCSSGridSize();
    removeGrid();
    createGrid();
};

createGrid();

btn.addEventListener('click', replaceGrid);

function changeColour(e) {
    e.srcElement.setAttribute('style', 'background: black;');
};

const panels = document.querySelectorAll('.panel');

for (let panel of panels) {
    panel.addEventListener('mouseover', changeColour);
};