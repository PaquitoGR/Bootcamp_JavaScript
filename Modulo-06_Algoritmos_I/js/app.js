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


var printLine = product => {
  var cartDiv = document.getElementById("cart-container");
  var productDesc = document.createElement("h5");
  var productPrice = document.createElement("label");
  var productUnits = document.createElement("input");

  productDesc.innerText = product.description;
  productPrice.innerText = product.price;

  productUnits.setAttribute("type", "number");  
  productUnits.setAttribute("max", product.stock);
  productUnits.setAttribute("min", 0);
  productUnits.setAttribute("value", product.units);

  cartDiv.appendChild(productDesc);
  cartDiv.appendChild(productPrice);
  cartDiv.appendChild(productUnits);
}

var printCart = products => {
  for (product of products) {
    printLine(product);
  }
}

printCart(products);