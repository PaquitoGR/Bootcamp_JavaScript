// Tipo de habitación
function roomType() {
    switch (document.getElementById("room-type").value) {
        case "standard": return 100;            
        case "junior": return 120;
        case "suite": return 150;
    }
}

// Opción Spa
var spaCheck = () => document.getElementById("spa-check").checked ? 20 : 0;

// Ocupación de la habitación
function roomSize() {
    switch (document.getElementById("room-size").value) {
        case "single": return 0.75;
        case "double": return 1;
        case "triple": return 1.25;
    }
}

// Cálculo del total en base al nº de noches    
var roomNights = () => document.getElementById("room-nights").value;

// Añadir cantidad en función de las noches de parking
var parkNights = () => 10 * document.getElementById("park-nights").value;

// Cálculo total e impresión en la página
function calculate() {
    var total = ((roomType() + spaCheck()) * roomSize()) * roomNights() + parkNights();
    // Alerta si falta algún campo (total sería NaN)
    isNaN(total) ? alert("Rellene todos los campos.") : document.getElementById("total").innerHTML = total + " €";
}

// Ejecutar el cálculo al presionar el botón "Calcular"
document.getElementById("calculate").addEventListener("click",calculate);