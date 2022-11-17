// Tipo de habitación
function roomType() {
    switch (document.getElementById("room-type").value) {           
        case "junior": return 120;
        case "suite": return 150;
    }
    return 100;     // valor de devolución por defecto (standard)
}

// Opción Spa
var spaCheck = () => document.getElementById("spa-check").checked ? 20 : 0;

// Ocupación de la habitación
function roomSize() {
    switch (document.getElementById("room-size").value) {
        case "double": return 1;
        case "triple": return 1.25;
    }
    return 0.75;    // valor por defecto (single)
}

// Cálculo del total en base al nº de noches    
var roomNights = () => document.getElementById("room-nights").value;

// Añadir cantidad en función de las noches de parking
var parkNights = () => 10 * document.getElementById("park-nights").value;

// Cálculo total e impresión en la página
function calculate() {
    var total = ((roomType() + spaCheck()) * roomSize()) * roomNights() + parkNights();
    document.getElementById("total").innerHTML = total + " €";
}

// Ejecutar el cálculo al presionar el botón "Calcular"
document.getElementById("room-type").addEventListener("input",calculate);
document.getElementById("spa-check").addEventListener("change",calculate);
document.getElementById("room-size").addEventListener("input",calculate);
document.getElementById("room-nights").addEventListener("input",calculate);
document.getElementById("park-nights").addEventListener("input",calculate);