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

// Calculamos el total IVA incluído
var totalIva = total + total * iva;

console.log("El total con IVA incluido, es", totalIva.toFixed(2) + "€");


// EXTRA 1: Calcular sueldo neto en nómina

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
};


// ******EJERCICIO CON LOS DATOS DEL IRPF EN ESPAÑA, EN 2022, APLICANDO CADA PORCENTAJE DE RETENCIÓN A CADA TRAMO*****
// Tramos IRPF España 2022
var tramo1 = 12450;     // de 0 a 12450, se aplicará el 19%
var tramo2 = 7749;     // de 12451 a 20200, se aplicará el 24%
var tramo3 = 14999;    // de 20201 a 35200, se aplicará el 30%
var tramo4 = 24799;    // de 35201 a 60000, se aplicará el 37%
var tramo5 = 239999;   // de 60001 a 300000, se aplicará el 45%. a partir de300001, se aplica el 47%


if (empleado.bruto < 12451) {
    var netoAnual = empleado.bruto - empleado.bruto * 0.19;
}
else {
    if (empleado.bruto < 20201) {
        var netoAnual = ( tramo1 - tramo1 * 0.19 ) + ((empleado.bruto - 12451) - (empleado.bruto - 12451) * 0.24);
    }
    else {
        if (empleado.bruto < 35201) {
            var netoAnual = ( tramo1 - tramo1 * 0.19 ) + (tramo2 - tramo2 * 0.24) + ((empleado.bruto - 20201) - (empleado.bruto - 20201) * 0.30);
        }
        else {
            if (empleado.bruto < 60001) {
                var netoAnual = ( tramo1 - tramo1 * 0.19 ) + (tramo2 - tramo2 * 0.24) + (tramo3 - tramo3 * 0.30) + ((empleado.bruto - 35201) - (empleado.bruto - 35201) * 0.37); 
            }
            else {
                if (empleado.bruto < 300001) {
                    var netoAnual = ( tramo1 - tramo1 * 0.19 ) + (tramo2 - tramo2 * 0.24) + (tramo3 - tramo3 * 0.30) + (tramo4 - tramo4 * 0.37) + ((empleado.bruto - 60001) - (empleado.bruto - 60001) * 0.45);
                }
                else {
                    var netoAnual = ( tramo1 - tramo1 * 0.19 ) + (tramo2 - tramo2 * 0.24) + (tramo3 - tramo3 * 0.30) + (tramo4 - tramo4 * 0.37) + (tramo5 - tramo5 * 0.45) + ((empleado.bruto - 300001) - (empleado.bruto - 300001) * 0.47);
                }
            }
        }
    }
}


/*
// *****EJERCICIO CON LOS DATOS ORIGINALES Y APLICANDO LA MISMA RETENCIÓN A TODO EL SUELDO*****
var retencion = 0;
if (empleado.bruto < 12000) {
    retencion = 0;
}
else {
    if (empleado.bruto < 24000) {
        retencion = 0.08;
    }
    else {
        if (empleado.bruto < 34000) {
            retencion = 0.16;
        }
        else {
            retencion = 0.30;
        }
    }
}

// Calculamos la retención con rebaja en caso de hijos
retencion = empleado.hijos > 0 ? retencion -= 0.02 : retencion; 

// Cálculo de la retribución neta anual y mensual
var netoAnual = empleado.bruto - empleado.bruto * retencion;
var netoMes = netoAnual/empleado.pagas;

// *****HASTA AQUÍ EL EJERCICIO CON LOS DATOS ORIGINALES*****
*/

// Cálculo de la retribución neta mensual
var netoMes = netoAnual/empleado.pagas;

console.log("El total anual del empleado es", netoAnual.toFixed(2) + "€");
console.log("El neto mensual es", netoMes.toFixed(2) + "€");
