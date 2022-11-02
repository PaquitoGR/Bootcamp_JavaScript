/*
const product = { 
    count: 3,
    price: 12.55,
    type: "ropa"
};

// Calculamos los diferentes valores de IVA segun el tipo de producto
var iva = 0.21;       // valor por defecto

// Modo IF
// if (product.type === "alimentacion") iva = 0.1;
// else if (product.type === "libro") iva = 0.04;

// Modo SWITCH
switch (product.type) {
    case "alimentacion":
        iva = 0.1;
        break;
    case "libro":
        iva = 0.04;
        break;
};

// Comprobamos que el campo COUNT no es cero ni negativo, en cuyo caso el total queda en 0
var total = product.count > 0 ? product.count * product.price : 0;

var totalIva = total + total * iva;

console.log("El total con IVA incluido, es", totalIva.toFixed(2) + "€");

console.log("**************************");

*/

// EXTRA 1: Calcular sueldo neto en nómina

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
};
/*
30000 - 20200 = 9800
20200 - 12450 = 7750

(12450 - 12450*0.19) + (7750 - 7750*0.24) + (9800 - 9800*0.30)

*/

console.log("La cuenta es: ", (12450 - 12450*0.19) + (7750 - 7750*0.24) + (9800 - 9800*0.30))


if (empleado.bruto < 12450) {
    var netoAnual = empleado.bruto - empleado.bruto * 0.19;

} else if (empleado.bruto < 20200) {
    
        var tramo1 = empleado.bruto - 12450;
        netoAnual = ( 12450 - 12450 * 0.19 ) + (tramo1 - tramo1 * 0.24);

    } else if (empleado.bruto < 35.200) {
            var tramo1 = empleado.bruto - 12450;
            var tramo2 = empleado.bruto - 20200;
            var netoAnual = ( 12450 - 12450 * 0.19 ) + (tramo1 - tramo1 * 0.24) + (tramo2 - tramo2 * 0.30);

        } else if (empleado.bruto < 60000) {
                var tramo1 = empleado.bruto - 12450;
                var tramo2 = empleado.bruto - 20200;
                var tramo3 = empleado.bruto - 35200;
                var netoAnual = ( 12450 - 12450 * 0.19 ) + (tramo1 - tramo1 * 0.24) + (tramo2 - tramo2 * 0.30) + (tramo3 - tramo3 * 0.37);       

            } else if (empleado.bruto < 300000) {
                    var tramo1 = empleado.bruto - 12450;
                    var tramo2 = empleado.bruto - 20200;
                    var tramo3 = empleado.bruto - 35200;
                    var tramo4 = empleado.bruto - 60000;
                    var netoAnual = ( 12450 - 12450 * 0.19 ) + (tramo1 - tramo1 * 0.24) + (tramo2 - tramo2 * 0.30) + (tramo3 - tramo3 * 0.37) + (tramo4 - tramo4 * 0.45);

                } else {
                    var tramo1 = empleado.bruto - 12450;
                    var tramo2 = empleado.bruto - 20200;
                    var tramo3 = empleado.bruto - 35200;
                    var tramo4 = empleado.bruto - 60000;
                    var tramo5 = empleado.bruto - 300000;
                    var netoAnual = ( 12450 - 12450 * 0.19 ) + (tramo1 - tramo1 * 0.24) + (tramo2 - tramo2 * 0.30) + (tramo3 - tramo3 * 0.37) + (tramo4 - tramo4 * 0.45) + (tramo5 - tramo5 * 0.47);
                }

               
// Calculamos la retención con rebaja en caso de hijos
// retencion = empleado.hijos > 0 ? retencion -= 0.02 : retencion; 

// Cálculo de la retribución neta anual y mensual
// var netoAnual = empleado.bruto - empleado.bruto * retencion;
var netoMes = netoAnual/empleado.pagas;

console.log("El total anual del empleado es", netoAnual + "€");
console.log("El neto mensual es", netoMes.toFixed(2) + "€");
