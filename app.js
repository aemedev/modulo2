let hoteles = {
    Premiere: {
        name: "Premiere Classe Caen Nord - Mémorial",
        location: "Caen",
        img:
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/27426435.jpg?k=09c39eb3dda25fa473146a78d3e23d4a02fc56c067ab284c4bec84a978268625&o=&hp=1",
    },
    Best: {
        name: "Best Western Plus Le Moderne",
        location: "Caen",
        img:
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/212521099.jpg?k=d6860c2b350a456465e0d94a8f9ecdbf583e3872faed84e5cfa424f9d5cd0c1e&o=&hp=1",
    },
};

let selectedHotel = prompt("Indique el hotel que quiere reseñar: Premiere o Best");

let nombre = document.querySelector('#name-hotel');
nombre.textContent = "Hotel " + hoteles[selectedHotel].name;
let localizacion = document.querySelector('#location-hotel');
localizacion.textContent = "Ubicado en " + hoteles[selectedHotel].location;
let imagenHotel = document.querySelector('#img-hotel');
imagenHotel.src = hoteles[selectedHotel].img;



let stars = {
    una:
        '<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>',
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};


let rating = prompt("Puntúa: una, dos, tres, cuatro o cinco estrellas");
let puntuacion = document.querySelector('#rating');
puntuacion.innerHTML = stars[rating];


let anonymous = confirm("¿Quiere que la reseña sea anónima?");

let anonimo = document.querySelector("#anonymous").checked = anonymous;