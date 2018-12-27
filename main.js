const container = document.getElementById('container');

//initial grid for etch-a-sketch 16x16 grid
for (let i = 0; i < 256; i++) {

    let gridItem = document.createElement('div');

    gridItem.setAttribute('id', 'panel');
    gridItem.addEventListener('mouseover', transform);

    container.appendChild(gridItem);

}

//add Event Listeners to buttons
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', resetGrid);

const special = document.getElementById('special');
special.addEventListener('click', resetSpecialGrid);

const classic = document.getElementById('classic');
classic.addEventListener('click', resetClassicGrid);

//build normal grid
function resetGrid() {

    let size = prompt('How many panels per row would you like?');
    let numPanels = size * size;
    container.style.gridTemplateColumns = 'repeat(' + size + ',auto)';
    container.style.gridTemplateRows = 'repeat(' + size + ',auto)';

    let panelLength = (720 / size) + 'px';

    console.log(container);

    removeGrid();

    for (let i = 0; i < numPanels; i++) {

        let gridItem = document.createElement('div');

        gridItem.setAttribute('id', 'panel');
        gridItem.style.height = panelLength;
        gridItem.style.width = panelLength;
        gridItem.addEventListener('mouseover', transform);

        container.appendChild(gridItem);
    }

}

function resetSpecialGrid() {

    let size = prompt('How many panels per row would you like?');
    let numPanels = size * size;
    container.style.gridTemplateColumns = 'repeat(' + size + ',auto)';
    container.style.gridTemplateRows = 'repeat(' + size + ',auto)';

    let panelLength = (720 / size) + 'px';

    console.log(container);

    removeGrid();

    for (let i = 0; i < numPanels; i++) {

        let gridItem = document.createElement('div');

        gridItem.setAttribute('id', 'panel');
        gridItem.style.height = panelLength;
        gridItem.style.width = panelLength;
        gridItem.addEventListener('mouseover', specialTransform);

        container.appendChild(gridItem);
    }

}

function resetClassicGrid() {

    let size = prompt('How many panels per row would you like?');
    let numPanels = size * size;
    container.style.gridTemplateColumns = 'repeat(' + size + ',auto)';
    container.style.gridTemplateRows = 'repeat(' + size + ',auto)';

    let panelLength = (720 / size) + 'px';

    console.log(container);

    removeGrid();

    for (let i = 0; i < numPanels; i++) {

        let gridItem = document.createElement('div');

        gridItem.setAttribute('id', 'panel');
        gridItem.style.height = panelLength;
        gridItem.style.width = panelLength;
        gridItem.style.backgroundColor = 'white';
        gridItem.addEventListener('mouseover', classicTransform);

        container.appendChild(gridItem);
    }

}

//changes color of panel
function transform(e) {
    e.target.style.backgroundColor = 'black';
}

function classicTransform(e) {

    let currentColor = e.target.style.backgroundColor;

    switch (currentColor) {
        case 'white':
            e.target.style.backgroundColor = 'lightgrey';
            break;

        case 'lightgrey':
            e.target.style.backgroundColor = 'silver';
            break;

        case 'silver':
            e.target.style.backgroundColor = 'grey';
            break;

        case 'grey':
            e.target.style.backgroundColor = 'black';
            break;

        default:
            return;
    }

}

let colorSelector = 0;

function specialTransform(e) {

    switch (colorSelector) {
        case 0:
            e.target.style.backgroundColor = 'red';
            break;

        case 1:
            e.target.style.backgroundColor = 'orange';
            break;

        case 2:
            e.target.style.backgroundColor = 'yellow';
            break;

        case 3:
            e.target.style.backgroundColor = 'green';
            break;

        case 4:
            e.target.style.backgroundColor = 'blue';
            break;

        case 5:
            e.target.style.backgroundColor = 'indigo';
            break;

        case 6:
            e.target.style.backgroundColor = 'violet';
            break;

        default:
            e.target.style.backgroundColor = 'white';

    }

    if (colorSelector == 6) {
        colorSelector = -1;
    }

    colorSelector++;
}



function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

/* Need to add
    Add two options: rainbow mode and classic mode, where the trail
    of pixels will either be random or get darker with each pass.*/
