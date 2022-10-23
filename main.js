const container = document.getElementById("container");

function makeGrid(rows,columns) {
    container.style.setProperty("--grid-rows",rows);
    container.style.setProperty("--grid-columns",columns);
    for (let c = 0; c < (rows*columns); c++) {
        let cell = document.createElement("div");
/*         cell.textContent = (c+1); */
        container.appendChild(cell).className = "cell";
    }
}


makeGrid (16,16);

let cells = document.querySelectorAll(".cell");

cells.forEach((cell)=> cell.addEventListener("mouseover",()=>cell.style["background-color"]="red"));