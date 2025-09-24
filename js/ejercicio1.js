'use strict'

/*
    vamos a crear un programa que nos pida dos numeros y nos diga
    cual es el mayor, el menor y si son iguales
*/ 

let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));

console.log(num1,num2);

// Lógica

if(num1>=0 && num2>=0){
    if(num1===num2){
        alert("Los números son iguales");
    } else if (num1>num2){
        alert("El numero "+ num1 + " es mayor que " + num2);
    } else {
        alert("El numero "+ num2 + " es mayor que " + num1);
    }
} else {
    alert("Los valores tienen que ser mayor o igual a 0")
}
