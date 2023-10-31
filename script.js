const squareContainer = document.getElementById("squareContainer");

let squareBox;

function boxNumbers(num) {
  num = num * num > 100 ? num = 50 : num = num;
  for (let i = 0; i < num; ++i) { 
    const boxGrid = document.createElement("div");
    boxGrid.className = "boxGrid";
    squareContainer.appendChild(boxGrid);
    for (let j = 0; j < num; j++) {
      squareBox = document.createElement("div");
      squareBox.className = "squareBox";
      boxGrid.appendChild(squareBox);
    }      
      
  }
  
}

boxNumbers(10)


const allBox = document.querySelectorAll('.squareBox');

allBox.forEach((allBox) => {allBox.addEventListener('mouseover', getColor)})


function getColor(event) {
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
event.target.style.backgroundColor = randomColor;
}
