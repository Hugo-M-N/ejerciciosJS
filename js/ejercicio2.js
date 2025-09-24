let num=0;
let sum=0;
let contador=0;

do {
    num = parseInt(prompt("Introduce un número"));
    if(num>=0){
        sum+=num;
        contador++; 
    }
} while (num>=0);

alert("La suma es: "+ sum + " y la media es " + (sum/contador));