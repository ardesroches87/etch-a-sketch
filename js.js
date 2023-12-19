const rows = 16;
const columns = 16;

const grid = document.querySelector("#grid");

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // cell.textContent = "sup";
        grid.appendChild(cell);
}
}



// cellItem.forEach(function (i) {
//     i.addEventListener("mouseover", function() {
//         dgfkjfshgfsjgh
//     })
// })





// let mouseEvent = () => {
//     document.cellItem.style.backgroundColor = "pink";
// }

// cellItem.forEach((item) => {
//     item.addEventListener("mouseover", mouseEvent)
// });

function pink(e) {
    // console.log(this === e.currentTarget);
    // console.log(this === e.target);
    this.style.backgroundColor = "pink";
}

let cellItems = document.querySelectorAll(".cell");

for (const cellItem of cellItems) {
    cellItem.addEventListener("mouseover", pink, false);
}