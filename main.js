// Variables Globales

const container = document.getElementById("container");
const btn = document.getElementById("btn");

// Crea la cuadricula usando dos parametros(filas y columnas) --- Se puede mejorar a un solo parametro
function makeGrid(rows,columns) {
    container.style.setProperty("--grid-rows",rows);
    container.style.setProperty("--grid-columns",columns);
    for (let c = 0; c < (rows*columns); c++) {
        let cell = document.createElement("div");
/*         cell.textContent = (c+1); */
        container.appendChild(cell).className = "cell";
    }
    let cells = container.querySelectorAll("div");
    cells.forEach(cell => cell.addEventListener("mouseover",()=>cell.style["background"]="black"));
}

// Esta es la cuadricula por default que se mostrara al cargar la pagina.

makeGrid(16,16);

// Esta funcion se encarga de añadir un eventlistener a todos los '''DIV''' que estan dentro del container 

function attachListener(){
    let cells = container.querySelectorAll("div");
    cells.forEach(cell => cell.addEventListener("mouseover",()=>cell.style["background"]="black"));
}

// Esta funcion abre una alerta que te pida cuantos lados tenga la cuadricula '''GRID''' 

function newSize(){
    let chose = prompt("How many squares per line?","16");
    makeGrid(chose,chose);
    attachListener();
}

//Aqui se encuentran todos los eventlistener de los botones

btn.addEventListener("click",newSize);