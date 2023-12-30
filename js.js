const container = document.querySelector("#grid");
let gridNum = 0;
let drawMode = "black";


function makeGrid (gridNum) {

    container.replaceChildren();

    for (let i = 0; i < gridNum; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("div-row");
        

        for (let j = 0; j < gridNum; j++) {
            const cells = document.createElement("div");
            cells.classList.add("div-cell");
            divRow.appendChild(cells);
            // cells.addEventListener("mouseover", () => fillCell(cells));
        }
        
        container.appendChild(divRow);

    }
    //delete lines 26 to 33 when adding colour buttons
    let cellItems = document.querySelectorAll(".div-cell");

    function pink(e) {
      this.style.backgroundColor = "pink";
    }
    for (const cellItem of cellItems) {
      cellItem.addEventListener("mouseover", pink, false);
    } 
}

makeGrid(16);


//Uncomment this area when working with colour buttons!!
//add eventlistener for pink button being clicked, which will then set off eventlistener of mouseover turning that color

// let colorChoice = document.querySelector(".color-btn");
// let black = document.querySelector("#black");
// let pink = document.querySelector("#pink");
// let blue = document.querySelector("#blue");


// black.addEventListener("click", () => {drawMode = "black"})
// pink.addEventListener("click", () => {drawMode = "pink";})
// blue.addEventListener ("click", () => {drawMode = "blue";})


// function fillCell(cells) {
//     switch (drawMode) {
//        case "black":
//         this.style.backgroundColor = "black";
//         break;
//        case "pink":
//         this.style.backgroundColor = "pink";
//         break;
//          default:
//             this.style.backgroundColor = "black";
//     }
// }



//Reset Button
let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    makeGrid(16);
});


//New Size Dropdown
let xlg = document.querySelector("#xlg");
let lg = document.querySelector("#lg");
let md = document.querySelector("#md");
let sm = document.querySelector("#sm");
let xsm = document.querySelector("#xsm");


xlg.addEventListener("click", () => { makeGrid(32);}) 

lg.addEventListener("click", () => {makeGrid(48);}) 

md.addEventListener("click", () => {makeGrid(64);}) 

sm.addEventListener("click", () => {makeGrid(80);}) 

xsm.addEventListener("click", () => {makeGrid(96);}) 
