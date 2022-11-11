// Variable para el resultado parcial
var partial = 0;
// Variable para comprobar el último botón de operación presionado
var lastButton = "none";

// Función tomar operando del input. Si el contenido no es numérico, informa del error y devuelve 0
function getOp() {
    if (isNaN(document.getElementById("num").value)) {
        alert("ERROR! Not a Number");
        return 0; 
    } else {
        return parseInt(document.getElementById("num").value);
    }
}

// Funcióones de operaciones suma, resta, multiplicación y división.
function sum() {    
    if (lastButton === "none") {
        document.getElementById("result").innerText = getOp();
        partial = getOp();
    } else {
        partial = partial + getOp();
        document.getElementById("result").innerText = partial;
    }
    lastButton = "sum";  // Regitra lastButton con la ultima operación
}

function subs() {    
    if (lastButton === "none") {
        document.getElementById("result").innerText = getOp();
        partial = getOp();
    } else {
        partial = partial - getOp();
        document.getElementById("result").innerText = partial;
    }
    lastButton = "subs";  // Regitra lastButton con la ultima operación
}

function multi() {   
        if (lastButton === "none") {
        document.getElementById("result").innerText = getOp();
        partial = getOp();
    } else {
        partial = partial * getOp();
        document.getElementById("result").innerText = partial;
    }    
    lastButton = "multi";  // Regitra lastButton con la ultima operación
}

function div() {
    if (lastButton === "none") {
        document.getElementById("result").innerText = getOp();
        partial = getOp();
    } else {
        partial = partial / getOp();
        document.getElementById("result").innerText = partial;
    }    
    lastButton = "div";  // Regitra lastButton con la ultima operación
}

// Función botón igual. Efectua la ultima operación registrada en lastButton
function equal() {
    switch (lastButton) {
        case "sum":
            sum();
            break;
        case "subs":
            subs();
            break;
        case "multi":
            multi();
            break;
        case "div":
            div();
            break;
        case "none":
            document.getElementById("result").innerText = 0;
            break;
    }
}

// Botón RESET, recarga la página
var reset = () => location.reload();

// Eventos
document.getElementById("sum").addEventListener("click", sum);
document.getElementById("subs").addEventListener("click", subs);
document.getElementById("multi").addEventListener("click", multi);
document.getElementById("div").addEventListener("click", div);
document.getElementById("equal").addEventListener("click", equal);
document.getElementById("inputs-reset").addEventListener("click", reset);