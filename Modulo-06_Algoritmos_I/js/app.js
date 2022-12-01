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

var numLabel = document.createElement("label");
var descLabel = document.createElement("label");
var unitsInput = document.createElement("input");


var div = document.getElementById("cart");
div.appendChild(numLabel);
div.appendChild(descLabel);
div.appendChild(unitsInput);

var printLine = product => {  
    descLabel.innerHTML = product.description + " - " + product.price + "€/ud. ";
    unitsInput.setAttribute("value", " " + product.units);
    unitsInput.setAttribute("size", 3);
    unitsInput.setAttribute("max", product.stock);
    unitsInput.setAttribute("min", 0);  
}

var printCart = products => {
  var prodIndex = 1;
  for (var product of products) {
    numLabel.innerHTML = prodIndex + ".";
    printLine(product);
    prodIndex ++;
  }
}

printCart(products);

// for (var product of products) {
//     var numLabel = document.createElement("label");
//     numLabel.setAttribute("value", numLabel);
//     var descLabel = document.createElement("label");
//     descLabel.setAttribute("value", product.description + "s-");
//     descLabel.setAttribute("id", "description");
//     var priceLabel = document.createElement("label");
//     priceLabel.setAttribute("value", product.price + "€/ud");
//     var prodUnits = document.createElement("input");
//     prodUnits.setAttribute("type", "number");
//     prodUnits.setAttribute("value", product.units);
//     prodUnits.setAttribute("max", product.stock);
//     prodUnits.setAttribute("min", 0);
//     //input.addEventeListener("change", event => console.log(event.target.value));
// }

