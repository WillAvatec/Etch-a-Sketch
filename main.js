// Variables Globales

const container = document.getElementById("container");
const resizeBtn = document.getElementById("resize");
const clearBtn = document.getElementById("clear");
const rainbowBtn = document.getElementById("rainbow");

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
    if (chose > 100) return alert("The maximun grid value is 99.");
    else if (chose == null) return alert(`The grid remains unchanged.`);
    cleanBackG();
    makeGrid(chose,chose);
    attachListener();

}

//Funcion que limpie los backgrounds

function cleanBackG() {
    let colored = container.querySelectorAll("div");
    colored.forEach(one=>one.style.background="aquamarine");
}


//Funcion que se encargue de cambiar color de los backgrounds de manera arbitraria

function makeItRainbow() {
    let divs = container.querySelectorAll("div");
    divs.forEach(div=>div.addEventListener("mouseover",()=>div.style["background"]=`hsl(${(Math.random())*360},100%,50%)`))
    
}

//Aqui se encuentran todos los eventlistener de los botones

resizeBtn.addEventListener("click",newSize);
clearBtn.addEventListener("click",cleanBackG);
rainbowBtn.addEventListener("click",makeItRainbow);
