// Función principal, muestra por consola el array con los numeros aleatorios generados.
var randomPick = () => {
    var num = parseInt(document.getElementById("num").value);
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var array = [];    
    
    if (max - min + 1 < num) { // Comprobacion: rango mayor que número
        alert("ERROR!! \nLa cantidad ha de ser mayor o igual a la diferencia entre máximo y mínimo");
    } else {
        while (array.length < num) {
            var randomNumber = getRandom(max, min);        
            if (array.indexOf(randomNumber) === -1) array.push(randomNumber);   // Control de números repetidos        
        }
    }
    
    console.log(array);
}

// Devuelve un número aleatorio dentro del rango seleccionado.
var getRandom = (max, min) => min + (Math.floor(Math.random() * ((max - min) + 1)));

// Event Listener para el bottón 
document.getElementById("generate-btn").addEventListener("click", randomPick);