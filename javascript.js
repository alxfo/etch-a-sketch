const container = document.querySelector('.container');
const btn = document.querySelector('#size');

function changeSize() {
    let size = prompt('How many squares per side? (max 100)');

    totalPanels = size * size

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
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

for (let i = 0; i < 256; i++) {
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