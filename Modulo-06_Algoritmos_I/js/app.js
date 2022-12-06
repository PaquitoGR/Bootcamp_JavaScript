// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

// Botón "calcular" deshabilitado por defecto.
document.getElementById("btn-calculate").disabled = true;

// Imprime una línea.
var printLine = product => {
    // Contenido del carrito
    var cartDiv = document.getElementById("cart-container");
    // Contenido de línea. Para cada línea se creará tanto el DIV como su contenido.
    var lineDiv = document.createElement("div");
    
    // Declaración elementos de cada línea
    var productNum = document.createElement("label");   // Nº de línea 
    var productDesc = document.createElement("label");  // Descripción
    var productPrice = document.createElement("label"); // Precio
    var productUnits = document.createElement("input"); // Cantidad

    // Enlace de los divs que se imprimirán en HTML, con sus padres
    cartDiv.appendChild(lineDiv);
    lineDiv.appendChild(productNum);
    lineDiv.appendChild(productDesc);
    lineDiv.appendChild(productPrice);
    lineDiv.appendChild(productUnits);
    
    // Nº de línea
    productNum.setAttribute("class", "product-number");
    productNum.innerText = (products.indexOf(product) + 1) + ".";
    // Descripción
    productDesc.innerText = product.description;
    // Precio
    productPrice.innerText = " - " + product.price + "€/ud. ";
    // Cantidad
    productUnits.setAttribute("type", "number");  
    productUnits.setAttribute("max", product.stock);
    productUnits.setAttribute("min", 0);
    productUnits.setAttribute("value", product.units);
    productUnits.addEventListener("change", event => product.units = event.target.valueAsNumber);
}

// Imprime todas las líneas.
var printCart = products => {
    for (var product of products) {    
        printLine(product);
  }
}

// Calcula y devuelve subtotal e IVA.
var ticket = () => {
    var subtotal = 0;
    var taxes = 0;

    for (var product of products) {
        subtotal += (product.price * product.units);
        taxes += product.price * product.units * (product.tax / 100);
    }

    return [subtotal, taxes];    
}

// Imprime Subtotal, IVA y Total en la página.
var printTotals = () => {
    var result = ticket();
    document.getElementById("subtotal").innerText = result[0].toFixed(2) + " €";
    document.getElementById("taxes").innerText = result[1].toFixed(2) + " €";
    document.getElementById("total").innerText = ( result[0] + result[1]).toFixed(2) + " €";
}

// Devuelve TRUE si las unidades de productos están a cero y resetea los totales si es así,
//  o FALSE si hay algún producto seleccionado.
var btnCheck = () => {
    for (var product of products) {
        if (product.units != 0) {
            return false;
        }
    }
    totalsReset(); 
    return true;
}

// Habilita o deshabilita el botón "calcular".
var btnSet = () => {
    document.getElementById("btn-calculate").disabled = btnCheck();
}

// Vuelve a cero valores de totales e IVA.
var totalsReset = () => {
    document.getElementById("subtotal").innerText = "0.00 €";
    document.getElementById("taxes").innerText = "0.00 €";
    document.getElementById("total").innerText = "0.00 €";
}

printCart(products);

// Event listener para el botón "calcular".
document.getElementById("btn-calculate").addEventListener("click", printTotals);
// Loop para los event listeners de los inputs.
document.querySelectorAll("input").forEach(item => item.addEventListener("change", btnSet));