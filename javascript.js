const container = document.querySelector('.container');
const btn = document.querySelector('#size');
let panelsPerSide = 16;
let totalPanels = panelsPerSide * panelsPerSide;

let cssRoot = document.querySelector(':root');

function setCSSGridSize() {
    cssRoot.style.setProperty('--panelsPerSide', `${panelsPerSide}`)
}

// split into three functions: one to get panelsPerSide as input, one to create
// the panels, one to call both when button clicked

function changeSize() {
    panelsPerSide = prompt('How many squares per side? (max 100)');

    totalPanels = panelsPerSide * panelsPerSide

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    setCSSGridSize();

    for (let i = 0; i < totalPanels; i++) {
        let div = document.createElement('div');
        div.classList.add('panel');
        container.appendChild(div);
    }

    const panels = document.querySelectorAll('.panel');

    for (let panel of panels) {
        panel.addEventListener('mouseover', changeColour);
    };
};

btn.addEventListener('click', changeSize);

for (let i = 0; i < totalPanels; i++) {
    let div = document.createElement('div');
    div.classList.add('panel');
    container.appendChild(div);
};

function changeColour(e) {
    e.srcElement.setAttribute('style', 'background: black;');
};

const panels = document.querySelectorAll('.panel');

for (let panel of panels) {
    panel.addEventListener('mouseover', changeColour);
};