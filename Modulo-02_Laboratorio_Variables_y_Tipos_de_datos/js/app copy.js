var review = prompt("Introduzca su reseña (del 1 al 5)")
var anonymous = confirm("¿quiére que su reseña sea anónima)")

document.getElementById("rating").innerHTML = review + " estrellas"  
document.getElementById("anonymous").checked = anonymous