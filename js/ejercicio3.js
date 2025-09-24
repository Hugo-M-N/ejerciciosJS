let num1 = parseInt(prompt("Introduce un número"));
let num2 = parseInt(prompt("Introduce el segundo número"))

if(num1>=0 && num2>=0){
    let result = "";
    if(num1>num2){
        for(let i = num2; i<=num1;i++){
            if(i==num1){
                result+= i;
            } else {
                result += i + ", "
            }
        }
    } else {
        for(let i = num1; i<=num2;i++){
            if(i==num2){
                result+= i;
            } else {
                result += i + ", "
            }
        }
    }

    alert(result);
} else {
    alert("Valores no validos")
}