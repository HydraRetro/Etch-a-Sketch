//ETCH-A_SKETCH

//Grid Sizes
const grid16 = document.getElementById('16');
const grid32 = document.getElementById('32');
const grid64 = document.getElementById('64');


//Default Grid of 16x16
function defaultGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const node = document.createElement("div");
            node.classList.add('gridCell');
            container.appendChild(node);
        }
    }
};
defaultGrid();

//Change div background color on mouse hover-----------------------------------
const gridItems = document.querySelectorAll('.gridCell');
gridItems.forEach((item) => {
    const gridItem = item;
    gridItem.count = 0;
    gridItem.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity = 1;
    })
});




//FUTURE ME - FIGURE OUT HOW TO REFACTOR THIS TO BE MUCH MORE CONDENSED

//Adds 16x16 grid in DOM HTML and Styles update.

grid16.addEventListener('click', function () {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const node = document.createElement("div");
            node.classList.add('gridCell');
            container.appendChild(node);
            //Changes grid to 32x32 with DOM
            document.getElementById('container').style.gridTemplateColumns = "repeat(16, calc((100% - 16px) / 16))";
            document.getElementById('container').style.gridTemplateRows = "repeat(16, calc((100% - 16px) / 16))";
        }
    };
    const gridItems = document.querySelectorAll('.gridCell');
    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.count = 0;
        gridItem.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.opacity = 1;
        })
    });
});

//Adds 32x32 grid in DOM HTML and Styles update.
grid32.addEventListener('click', function () {
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
            const node = document.createElement("div");
            node.classList.add('gridCell');
            container.appendChild(node);
            //Changes grid to 32x32 with DOM
            document.getElementById('container').style.gridTemplateColumns = "repeat(32, calc((100% - 32px) / 32))";
            document.getElementById('container').style.gridTemplateRows = "repeat(32, calc((100% - 32px) / 32))";
        }
    };
    const gridItems = document.querySelectorAll('.gridCell');
    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.count = 0;
        gridItem.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.opacity = 1;
        })
    });
});

//Adds 64x64 grid in DOM HTML and Styles update
grid64.addEventListener('click', function () {
    for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 64; j++) {
            const node = document.createElement("div");
            node.classList.add('gridCell');
            container.appendChild(node);
            //Changes grid to 64x64 with DOM
            document.getElementById('container').style.gridTemplateColumns = "repeat(64, calc((100% - 64px) / 64))";
            document.getElementById('container').style.gridTemplateRows = "repeat(64, calc((100% - 64px) / 64))";
        }
    };
    const gridItems = document.querySelectorAll('.gridCell');
    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.count = 0;
        gridItem.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.opacity = 1;
        })
    });
});





//Primitive Reset Button
const resetButton = document.getElementById('buttonReset');
resetButton.addEventListener('click', function () {
    location.reload();
});