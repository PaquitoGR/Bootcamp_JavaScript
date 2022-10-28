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
var review = prompt("Introduzca su reseña (del 1 al 5)");
var anonymous = confirm("¿quiére que su reseña sea anónima)");

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel[hotelSel].name;
document.getElementById("location-hotel").innerHTML = "Ubicación: " + hotel[hotelSel].location;
document.getElementById("img-hotel").src = hotel[hotelSel].image;

// estrellas vacías
var noStar = 5 - review;

// estrellas mostradas = estrellas de la review, completando con estrellas vacías hasta 5
document.getElementById("rating").innerHTML = "<span class='orangeStar'>&#9733</span>".repeat(review) + "<span class='orangeStar'>&#9734</span>".repeat(noStar);

document.getElementById("anonymous").checked = anonymous;
