let selected = "";
let BODY = document.querySelector("body");
let table = document.createElement("table");
let options = document.createElement("div");
let win = false;

let SSel = 1;

let contandor = 0;
let checkAmoun = 45;

// Voy a comentar tu código
const Sudoku =[
    [[
  [5,3,0, 0,7,0, 0,0,0],
  [6,0,0, 1,9,5, 0,0,0],
  [0,9,8, 0,0,0, 0,6,0],

  [8,0,0, 0,6,0, 0,0,3],
  [4,0,0, 8,0,3, 0,0,1],
  [7,0,0, 0,2,0, 0,0,6],

  [0,6,0, 0,0,0, 2,8,0],
  [0,0,0, 4,1,9, 0,0,5],
  [0,0,0, 0,8,0, 0,7,9],
],[
  [5,3,4, 6,7,8, 9,1,2],
  [6,7,2, 1,9,5, 3,4,8],
  [1,9,8, 3,4,2, 5,6,7],

  [8,5,9, 7,6,1, 4,2,3],
  [4,2,6, 8,5,3, 7,9,1],
  [7,1,3, 9,2,4, 8,5,6],

  [9,6,1, 5,3,7, 2,8,4],
  [2,8,7, 4,1,9, 6,3,5],
  [3,4,5, 2,8,6, 1,7,9],
]],
[[
  [8,2,0, 1,0,4, 3,0,6],
  [0,6,5, 3,2,0, 1,4,0],
  [3,0,1, 0,8,9, 0,5,2],

  [5,0,3, 0,6,8, 2,0,1],
  [0,7,0, 5,0,3, 0,8,0],
  [6,0,8, 9,7,0, 4,0,5],

  [7,8,0, 2,0,5, 0,1,4],
  [0,5,4, 0,9,6, 8,2,0],
  [2,0,9, 8,0,1, 0,6,7],
],[
  [8,2,7, 1,5,4, 3,9,6],
  [9,6,5, 3,2,7, 1,4,8],
  [3,4,1, 6,8,9, 7,5,2],

  [5,9,3, 4,6,8, 2,7,1],
  [4,7,2, 5,1,3, 6,8,9],
  [6,1,8, 9,7,2, 4,3,5],

  [7,8,6, 2,3,5, 9,1,4],
  [1,5,4, 7,9,6, 8,2,3],
  [2,3,9, 8,4,1, 5,6,7],
]]


];

let tmpH = document.createElement("H2");
tmpH.innerText = "Selecciona un sudoku";
tmpH.classList = "inicio";
BODY.appendChild(tmpH);

for(let i=0; i< Sudoku.length;i++){
    let tmp = document.createElement("P");
    tmp.classList = "nivel";
    tmp.innerText = i+1;
    tmp.addEventListener("click", function(){
        BODY.innerHTML = "";
        SSel = i;
        crearSudoku();
    });
    BODY.appendChild(tmp);
}


function crearSudoku(){
    let tmp = document.createElement("H2");
    tmp.innerText = "Contador de errores: " + contandor;
    tmp.classList = "contador";
    BODY.appendChild(tmp);
    
    for(let i = 0; i<9; i++){
        let tmpTR = document.createElement("tr");
        for(let j = 0; j<9;j++){
            let tmpTD = document.createElement("td");
            if(Sudoku[SSel][0][i][j]!=0){
                tmpTD.innerText= Sudoku[SSel][0][i][j];
                tmpTD.classList.add("fijado");
            } else {
                tmpTD.addEventListener("click", function(){
                    if(selected!="X") {
                        if(Sudoku[SSel][1][i][j]==Number(selected)) this.innerText = selected;
                        else {
                            contandor++;
                            tmp.innerText = "Contador de errores: " + contandor;
                        }
                        if(contandor>=10) window.location.reload();
                    }
                    else this.innerText = "";
                    win = checkWin()
                    if(win) alert("Has ganado");
                });
            }
            if(j==3 || j==6) tmpTD.classList +=" LBorder";
            if(j==2 || j==5) tmpTD.classList +=" RBorder";
            if(i==3 || i==6) tmpTD.classList +=" TBorder";
            if(i==2 || i==5) tmpTD.classList +=" BBorder";
            tmpTR.appendChild(tmpTD);
        }
        table.appendChild(tmpTR);
    }
    
    for(let i = 1; i<=10;i++){
        let tmpBtn = document.createElement("p");
        tmpBtn.addEventListener("click", function(){
            selected = this.innerText;
            selectedBtn(this);
        })
        if(i<10) tmpBtn.innerText = i;
        else tmpBtn.innerText = "X";
        options.appendChild(tmpBtn);
    }
    
    BODY.appendChild(table);
    options.id="Btns"
    BODY.appendChild(options);

}


function selectedBtn(btn){
    let btns = document.querySelectorAll("p");
    btns.forEach(e => {
        e.style.backgroundColor = "black";
        e.style.color = "var(--primaryColor)";
    });
    btn.style.backgroundColor = "var(--primaryColor)";
    btn.style.color = "black";
}

function checkWin(){
    // Check rows
    table.childNodes.forEach((row)=>{
        let sum = 0;
        for(let i = 0; i<9; i++){
             sum += Number(row.childNodes[i].innerText);
            }

        if(sum!=45) return false;
    });

    // check colums
    for(let i=0; i<9;i++){
        let sum = 0;
        for(let j=0; j<9; j++){
            sum+= Number(table.childNodes[j].childNodes[i].innerText);
        }

        if(sum!=45) return false;
    }

    // check Blocks
    for(let i = 0; i<9;i++){
        let sum = 0;
        for(let j=0;j<3;j++){
            for(let k = 0; k<3; k++){
                sum += Number(table.childNodes[j+Math.floor(i/3)*3].childNodes[k+(i%3)*3].innerText);
            }
        }
        if(sum!=45) return false;
    }

    return true;

} 