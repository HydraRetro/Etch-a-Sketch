// Set variables
// const container = document.getElementById("container");

//Grid Sizes
const grid16 = document.getElementById('16');
const grid32 = document.getElementById('32');
const grid64 = document.getElementById('64');


//Default Grid of 16x16
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const node = document.createElement("div");
        node.classList.add('gridCell');
        container.appendChild(node);
    }
};

//FUTURE ME - FIGURE OUT HOW TO REFACTOR THIS TO BE MUCH MORE CONDENSED
//Adds 16x16 grid in DOM HTML and Styles update.
grid16.addEventListener('click', function (e) {
    // alert("Button 16");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const node = document.createElement("div");
            node.classList.add('gridCell');
            container.appendChild(node);
            //Changes grid to 16x16 with DOM
            document.getElementById('container').style.gridTemplateColumns = "repeat(16, calc((100% - 16px) / 16))";
            document.getElementById('container').style.gridTemplateRows = "repeat(16, calc((100% - 16px) / 16))";
        }
    };
});
//Adds 32x32 grid in DOM HTML and Styles update.
grid32.addEventListener('click', function (e) {
    // alert("Button 32");
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
});
//Adds 64x64 grid in DOM HTML and Styles update
grid64.addEventListener('click', function (e) {
    // alert("Button 64");
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
});



//Change div background color on mouse hover
const cellColor = document.querySelector(".gridCell");
cellColor.addEventListener("mouseover", function () {
    this.style.backgroundColor = "black";
    console.log(cellColor);
});





//Primitive Reset Button
const resetButton = document.getElementById('buttonReset');
resetButton.addEventListener('click', function () {
    location.reload();
});