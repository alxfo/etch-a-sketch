const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('panel')
    container.appendChild(div);
}

function changeColour(e) {
    e.srcElement.setAttribute('style', 'background: black;')
}

const panels = document.querySelectorAll('.panel')

for (let panel of panels) {
    panel.addEventListener('mouseover', changeColour)
}