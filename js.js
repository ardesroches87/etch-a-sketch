const container = document.querySelector("#grid");
let gridNum = 0;


function makeGrid (gridNum) {

    container.replaceChildren();

    for (let i = 0; i < gridNum; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("div-row");
        

        for (let j = 0; j < gridNum; j++) {
            const cells = document.createElement("div");
            cells.classList.add("div-cell");
            divRow.appendChild(cells);
        }
        
        container.appendChild(divRow);
    }
    
}

makeGrid(16);

changeColor();

// function changeColor () {
// function pink(e) {
//     // console.log(this === e.currentTarget);
//     // console.log(this === e.target);
//     this.style.backgroundColor = "pink";
// }

let cellItems = document.querySelectorAll(".div-cell");

// for (const cellItem of cellItems) {
//     cellItem.addEventListener("mouseover", pink, false);
// } 
// }

//add eventlistener for pink button being clicked, which will then set off eventlistener of mouseover turning that color



function changeColor() {
let colorChoice = document.querySelector(".color-btn");
let black = document.querySelector("#black");
let pink = document.querySelector("#pink");
let blue = document.querySelector("#blue");
colorChoice.addEventListener("click", function(e) {
 if (e.currentTarget.id == "black") {
  cellItems.style.backgroundColor = "black";
 } else if (e.currentTarget.id == "pink") {
    this.style.backgroundColor = "pink";
 } else if (e.currentTarget.id == "blue") {
    this.style.backgroundColor = "blue";
 } 
}
)
}

//Reset Button
let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    makeGrid(16);
});






//New Size Button
// let size = document.querySelector("#size");

// size.addEventListener("click", () => {
//     let newSize = (prompt("Enter a number between 16 and 100"));
//     makeGrid(newSize);
// });