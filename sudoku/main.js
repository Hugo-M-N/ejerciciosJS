let selected = "";
let BODY = document.querySelector("body");
let table = document.createElement("table");
let options = document.createElement("div");
let win = false;

const Sudoku = [
  [5,3,0, 0,7,0, 0,0,0],
  [6,0,0, 1,9,5, 0,0,0],
  [0,9,8, 0,0,0, 0,6,0],

  [8,0,0, 0,6,0, 0,0,3],
  [4,0,0, 8,0,3, 0,0,1],
  [7,0,0, 0,2,0, 0,0,6],

  [0,6,0, 0,0,0, 2,8,0],
  [0,0,0, 4,1,9, 0,0,5],
  [0,0,0, 0,8,0, 0,7,9],
];

let checkAmoun = 45;

for(let i = 0; i<9; i++){
    let tmpTR = document.createElement("tr");
    for(let j = 0; j<9;j++){
        let tmpTD = document.createElement("td");
        if(Sudoku[i][j]!=0){
            tmpTD.innerText= Sudoku[i][j];
            tmpTD.classList.add("fijado");
        } else {
            tmpTD.addEventListener("click", function(){
                if(selected!="X") this.innerText = selected;
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