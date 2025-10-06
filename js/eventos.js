'use strict'

/* Eventos
funciones que se ejecutan cada vez que sucede algo
como hacer click, mover el ratón, etc.
*/

let btn = document.getElementById("btn");
btn.style.padding = "10px";
btn.style.color = "white";
btn.style.background = "green";
// Raton
function cambiarColorBoton(){
    console.log("Has pulsado el botón")

    if(btn.style.background == "green") btn.style.background = "blue";
    else btn.style.background = "green";
    


    return true;
}

btn.addEventListener("click", function(){
    console.log("boton pulsado");
    cambiarColor();
});

btn.addEventListener("mouseover", function(){
    btn.style.background = "orange";
});

btn.addEventListener("mouseout", function(){
    btn.style.background = "pink";
});

let input = document.getElementById("campo");

input.addEventListener("focus", function(){
    console.log("Focus del boton");
});

input.addEventListener("blur", function(){
    console.log("Blur del boton");
});

input.addEventListener("keydown", function(e){
    console.log(e, "evento");
    console.log("Keydown: "+ e.key);
});

input.addEventListener("keypress", function(e){
    console.log(e, "evento");
    console.log("Keypress: "+ e.key);
});

input.addEventListener("keyup", function(e){
    console.log(e, "evento");
    console.log("Keyup: "+ e.key);
});

