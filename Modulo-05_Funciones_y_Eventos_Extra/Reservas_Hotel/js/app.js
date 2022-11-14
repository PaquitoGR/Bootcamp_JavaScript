/*  La tarifa de la habitación por noche es de 100€ para 
categoría Standard, 120€ Junior Suite y 150€ Suite.
    El uso del SPA incrementa la tarifa anterior en 20€.
    Una vez tengas la tarifa en función de la categoría y el
SPA, la ocupación (individual o triple) actúa como un factor
de decremento o incremento, siendo la opción de doble el estándar.
Es decir, el uso individual reduce un 25% la tarifa por noche,
mientras que el uso triple la incrementa en un 25%. El uso doble
la deja tal cual.
    Cada noche de parking suma 10€.
*/

var roomType = document.getElementById("room-type");
var spaCheck = document.getElementById("spa-check");
var roomSize = document.getElementById("room-size");
var roomNights = document.getElementById("room-nights");
var parkNights = document.getElementById("park-nights");

function calculate() {
    var total = 0;
    switch (roomType.value) {
        case "standard":
            total += 100;
            break;
        case "junior":
            total += 120;
            break;
        case "suite": total +=150;
            break;
    }
    console.log(total);
    total += spaCheck.checked ? 20 : 0;
    console.log(total);
    switch (roomSize.value) {
        case "single":
            total *= 0.75;
            break;
        case "double":
            break;
        case "triple":
            total *= 1.25;
            break;
    }
    console.log(total);
    total *= roomNights.value;
    console.log(total);
    total += 10 * parkNights.value;
    console.log(total);

    document.getElementById("total").innerHTML = total;
}
document.getElementById("calculate").addEventListener("click",calculate);