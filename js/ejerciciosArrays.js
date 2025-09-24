let body = document.getElementById("body");

function listar(a){
    a.forEach((text)=>{
    body.append(document.createElement("P").textContent=text);
    body.append(document.createElement("BR"));
});
}

// Ejer 1
let asignaturas = ["Mates", "Lengua", "Física"];
listar(asignaturas);

body.append(document.createElement("HR"));
// Ejer 2 
asignaturas.push("Filosofía");
listar(asignaturas);
body.append(document.createElement("HR"));

// Ejer 3
body.append(document.createElement("P")
.textContent="Se va a eliminar " + asignaturas[asignaturas.length-1]);
body.append(document.createElement("BR"));
asignaturas.pop();
listar(asignaturas);
body.append(document.createElement("HR"));


// Ejer 4
let personas = ["Julia", "Maria", "Elena", "Ana", "Luis"];
body.append(document.createElement("P").textContent="Lista original");
body.append(document.createElement("BR"));
listar(personas)

personas.splice(personas.indexOf("Maria"),1);

body.append(document.createElement("BR"));
body.append(document.createElement("P").textContent="Lista Modificada");
body.append(document.createElement("BR"));
listar(personas);

