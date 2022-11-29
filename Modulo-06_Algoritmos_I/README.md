## Ejercicios Bootcamp JavaScript - Módulo 6 - Algoritmos I

### Carrito de la compra

#### Introducción

1. Prepara un HTML con la cabecera, el botón de calcular, y los campos de la factura subtotal, impuestos y total. Sin embargo, no hagas ningún elemento para los productos, eso lo debes hacer desde JS. Si necesitaras crear algún <div>, identifícalo con algún id que te servirá como punto de entrada para "enganchar" tu lista de productos.
2. Implementa un algoritmo que genere desde Javascript los elementos HTML necesarios para mostrar una lista de productos con su descripción, precio unitario y un input de unidades para cada uno.
3. Prepara un algoritmo que calcule la factura cuando pulsemos el botón calcular y muestre el resultado en los campos subtotal, impuestos y total.

#### Datos de entrada

Vamos a proporcionarte un ejemplo de lista de productos. Utilízala en tu ejercicio como punto de partida:

```JS
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
```

#### Extra

Intenta hacer que el botón Calcular se habilite o deshabilite en función de si el usuario ha elegido al menos 1 unidad de algún producto o no. Es decir:

Si las unidades de todos los productos están a 0, el botón calcular se deshabilita.
Si existe al menos 1 producto con 1 unidad seleccionada, el botón calcular se deberá habilitar.