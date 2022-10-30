// Objeto con los 3 hoteles almmacenados: Palace, Mencey y Oberoi
var hotel = {
    Palace : {
        name: "Alhambra Palace",
        location: "Granada",
        image: "img/APalace.jpg",
    },

    Mencey : {
        name: "Heritage Grand Mencey",
        location: "Tenerife",
        image: "img/Mencey.jpg",
    },

    Oberoi : {
        name: "Oberoi Udaivilas",
        location: "India",
        image: "https://www.lasociedadgeografica.com/blog/uploads/2015/12/Post-5-Noviembre-Hoteles-de-la-cadena-Oberoi-Oberoi-Udaivilas-c-Oberoi-Hotels.jpg",
    },
};

var hotelSel = prompt("Introduzca el nombre del hotel");
var ratingSel = prompt("Introduzca su reseña (del 1 al 5)");
//var ratingSel = prompt("Introduzca su reseña (una, dos, tres, cuatro o cinco)");
var anonymous = confirm("¿quiére que su reseña sea anónima)");

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel[hotelSel].name;
document.getElementById("location-hotel").innerHTML = "Ubicación: " + hotel[hotelSel].location;
document.getElementById("img-hotel").src = hotel[hotelSel].image;

// Solución propia para las estrellas: El usuario introduce la puntuación en número y se calculan las estrellas vacías,
// con las que se completará la linea de estrellas, restando a 5 el número de estrellas introducias por el usuario:
var noStar = 5 - ratingSel;

// Estrellas mostradas = estrellas de la ratingSel + estrellas vacías, usando el método de string "repeat"
// que devuelve la cadena repetida las veces que se indiquen entre paréntesis.
document.getElementById("rating").innerHTML = "<span class='orangeStar'>&#9733</span>".repeat(ratingSel) + "<span class='blackStar'>&#9734</span>".repeat(noStar);



/*
// Solución propuesta en clase para las estrellas: El usuario introduce a puntuación en formato string, un objeto que almacena las 5 posibilidades
// y muestra el número de estrellas seleccionadas:

var stars = {
    una : "<span class='orangeStar'>&#9733</span><span class='blackStar'>&#9734</span><span class='blackStar'>&#9734</span><span class='blackStar'>&#9734</span><span class='blackStar'>&#9734</span>",
    dos : "<span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='blackStar'>&#9734</span><span class='blackStar'>&#9734</span><span class='blackStar'>&#9734</span>",
    tres : "<span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='blackStar'>&#9734</span><span class='blackStar'>&#9734</span>",
    cuatro : "<span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='blackStar'>&#9734</span>",
    cinco : "<span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span><span class='orangeStar'>&#9733</span>",
};

document.getElementById("rating").innerHTML = stars[ratingSel];
document.getElementById("anonymous").checked = anonymous;
*/