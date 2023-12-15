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

// const hoverPink = document.querySelector(".cell:hover");

const cellItem = document.querySelector(".cell");


// function stayPink () {
//     cell.style.cssText = "background-color: pink;"
// }

cellItem.addEventListener("mouseover", () => {
    cellItem.classList.replace("pink", "cell");
});