// Variable con el mensaje de error:
var err = "FATAL ERROR"

// Leer los perandos de los inputs. Devuelve un objeto con el con el contenido de los dos inputs.
var getOps = () => {
    var opA = parseInt(document.getElementById("numA").value),
        opB = parseInt(document.getElementById("numB").value);
    return {opA, opB};
}

// Función suma
var sum = () => {
    var ops = getOps();
    document.getElementById("result").innerText = (isNaN(ops.opA) || isNaN(ops.opB)) ? err : ops.opA + ops.opB;
}

// Función resta
var subs = () => {
    var ops = getOps();
    document.getElementById("result").innerText = (isNaN(ops.opA) || isNaN(ops.opB)) ? err : ops.opA - ops.opB;
}

// Función multiplicación
var multi = () => {
    var ops = getOps();
    document.getElementById("result").innerText = (isNaN(ops.opA) || isNaN(ops.opB)) ? err : ops.opA * ops.opB;
}

// Función división
var divs = () => {
    var ops = getOps();
    document.getElementById("result").innerText = (isNaN(ops.opA) || isNaN(ops.opB)) ? err : ops.opA / ops.opB;
}

// Función para resetear los inputs y el resultado
var reset = () => {
    document.getElementById("numA").value = "";
    document.getElementById("numB").value = "";
    document.getElementById("result").innerText = "";    
}

// Event listeners para los botones de las operaciones y el reset
document.getElementById("sum").addEventListener("click", sum);
document.getElementById("subs").addEventListener("click", subs);
document.getElementById("mult").addEventListener("click", multi);
document.getElementById("div").addEventListener("click", divs);
document.getElementById("inputs-reset").addEventListener("click", reset);
