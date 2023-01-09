// Set variables
const container = document.getElementById("container");

//Default Grid of 16x16
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const node = document.createElement("div");
        node.classList.add('gridCell');
        container.appendChild(node);
    }
};

//Change div background color on mouse hover
const cellColor = document.querySelector(".gridCell");
cellColor.addEventListener("mouseover", function () {
    document.querySelector(".gridCell").style.backgroundColor = "black";
});
















//Primitive Reset Button
const resetButton = document.getElementById('buttonReset');
resetButton.addEventListener('click', reset);
function reset() {
    location.reload();
}