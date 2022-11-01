
const product = { 
    count: 3,
    price: 12.55,
    type: "ropa"
};

// Calculamos los diferentes valores de IVA segun el tipo de producto
let iva = 0.21;       // valor por defecto

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
let total = product.count > 0 ? product.count * product.price : 0;

let totalIva = total + total * iva;

console.log("El total con IVA incluido, es", totalIva.toFixed(2) + "€");

console.log("**************************");

// EXTRA 1: Calcular sueldo neto en nómina

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
};


let retencion = 0;
if (empleado.bruto < 12450) {
    retencion = 0.19;
} else if (empleado.bruto < 20200) {
        retencion = 0.24;
    } else if (empleado.bruto < 35.200) {
            retencion = 0.30;
        } else if (empleado.bruto < 60000) {
                retencion = 0.37;
            } else if (empleado.bruto < 300000) {
                    retencion = 0.45;
                } else {
                    retencion = 0.47;
                }

// Calculamos la retención con rebaja en caso de hijos
retencion = empleado.hijos > 0 ? retencion -= 0.02 : retencion; 

// Cálculo de la retribución neta anual y mensual
let netoAnual = empleado.bruto - empleado.bruto * retencion;
let netoMes = netoAnual/empleado.pagas;

console.log("El total anual del empleado es", netoAnual + "€");
console.log("El neto mensual es", netoMes.toFixed(2) + "€");
