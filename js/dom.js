'use strinc'

// Recuperar elementos por ID
let caja = document.getElementById("caja");
console.log(caja);

//añadir valor desde JS
caja.innerHTML = "Nuevo valor de mi div";

// Cambiar estilos desde JS
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

// Anadir clases con JS
caja.className= "nueva";

// QuerySelector
let cajaQuery = document.querySelector("#caja");
let divs = document.querySelectorAll("DIV");
divs[2].innerHTML="Nuevo valor de vid[2]";
divs[2].style.background = "blue";
divs[2].style.padding="10px";
divs[2].style.color = "white";
console.log(divs, "DIVs")

let azules = document.querySelectorAll(".blue");
console.log(azules);

// funcion
function cambiarColor(color){
    caja.style.background = color;
}