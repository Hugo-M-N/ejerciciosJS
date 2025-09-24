let a = ["Me", "aburro", "mucho"];
let parrafo = document.createElement("P");
a.forEach((c)=>{parrafo.textContent+=c + " "});
document.getElementById("body").append(parrafo)
a.push("AIUDAME");
parrafo.textContent = "";
a.forEach((c)=>{parrafo.textContent+=c + " "});
document.getElementById("body").append(parrafo)