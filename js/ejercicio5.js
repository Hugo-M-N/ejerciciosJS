let num = parseInt(prompt("Introduce el número a dividir"));

if(num>=0){
    let result = "";
    for(let i=0; i<=num;i++ ){
        if(num%i==0 && i!=num){
            result+= i + ", ";
        } else if(num%i==0 && i==num) {
            result+= i;
        }
    }

    alert(result);
} else {
    alert("Valores no validos");
}