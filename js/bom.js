'use strinc'

// BOM - Browser Object Model

// Ver tamaño de la ventana
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.location);
}

function redirect(url){
    window.location.href = url;
}

/* 
self: misma pestaña
parent: dentro de iframes

*/

function NewPage(url){
    window.open(url, "blank");
}