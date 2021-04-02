let container = document.querySelector("#container");

let input = 14;

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

function etch(input) {
  for (i = 0; i < input ** 2; i++) {
    container.style.cssText = `grid-template-columns: repeat(${input}, 1fr); grid-template-rows: repeat(${input}, 1fr`;

    const grid = document.createElement("div");
    grid.classList.add("squares");

    const rainbow = random_bg_color();

    changeColor = () => {
      grid.style.cssText = `background-color: ${rainbow}`;
    };

    grid.addEventListener("mouseenter", changeColor);

    container.appendChild(grid);
  }
}

removeGrid = () => {
  for (i = 0; i < input ** 2; i++) {
    let selectGrid = document.querySelector(".squares");
    container.removeChild(selectGrid);
  }
};

function refresh() {
  removeGrid();
  let howManySquares = prompt("How many sqaures per side?", "");
  let newInput = Number(howManySquares);
  input = newInput;
  etch(input);
}

let restartbtn = document.querySelector(".restart-button");

restartbtn.addEventListener("click", refresh);

etch(input);
