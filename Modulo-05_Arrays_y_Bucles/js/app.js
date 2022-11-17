const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];


// Imprimir por consola un produucto

function printProd(product) {
    console.log("Id: " + product.id);
    console.log("Name: " + product.name);
    console.log("Price: " + product.price);
    console.log("Count: " + product.count);
    console.log("Premium: " + product.premium);
}

// Listar el carrito

function listCar(car) {
    for (product of car) {
        printProd(product);
        console.log("********************************");
    }
}

listCar(carrito);

// Eliminar el producto con id 54657 del carrito 

function deleteProd(car, delId) {
    for (index in car) {
        if (car[index].id == delId) {
            car.splice(index, 1);
        }
    }
}

deleteProd(carrito, 54657);


// Calcular el total del carrito de la compra (antes de descuentos)

function getTotal(car) {
    var total = 0;
    for (product of car) {
        total += product.price * product.count;
    }
    return total;
}
console.log("\nEl total de la compra es: " + getTotal(carrito).toFixed(2) + " €");


// Filtrar por productos que sean premium

function filterPremium(car) {
    console.log("\nProductos premium:")
    for (product of car) {
        if (product.premium) {
            printProd(product);
            console.log("********************************");
        }
    }
}

filterPremium(carrito);

// OPCIONAL

// Si todos los productos son premium, mostrar mensaje "Pedido sin astos de envío";
// si no, "Este pedido tiene gastos de envío"

function checkPremium(car) {
    var allPrem = true;
    for (product of car) {
        if (product.premium == false) {
            allPrem = false;
            break;      // Si encuentra un solo producto no premium, no es necesario que siga buscando
        }
    }
    allPrem ? console.log("\nPedido sin gastos de envío") : console.log("\nEste pedido tiene gastos de envío");
}

checkPremium(carrito);


// Mostrar el carrito en un listado HTML básico

var toPrint = "";
for (product of carrito) {
    toPrint += "<ul><li>Id: " + product.id + "<br>Name: " 
                + product.name + "<br>Price: " + product.price
                + "<br>Count: " + product.count + "<br>Premium: "
                + product.premium + "<br>Subtotal: " + (product.price * product.count).toFixed(2) + " €</li></ul>";
}
document.getElementById("carrito").innerHTML = toPrint;


// Aplicar un descuento del 5% si la compra es mayor de 100 €

function discApply(car) {
    if (getTotal(car) > 100) {      
        var subtotal = getTotal(car);  
        for (product of car){
            product.price *= 0.95;
        }
        // se muestra en la página la cantidad descontada
        document.getElementById("discount").innerHTML = "Por compra de mas de 100€,ha obtenido un descuento de "
                                                        + (subtotal - getTotal(car)).toFixed(2) + " €";
    }
}

discApply(carrito);

// Muestra en el total
document.getElementById("total").innerHTML = ("El total es:  " + getTotal(carrito).toFixed(2) + " €");