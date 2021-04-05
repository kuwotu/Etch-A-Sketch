let container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");
const blackBtn = document.querySelector("#blackBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");

function random_bg_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

function etch(input) {
  for (i = 0; i < input ** 2; i++) {
    container.style.cssText = `grid-template-columns: repeat(${input}, 1fr); grid-template-rows: repeat(${input}, 1fr`;
    const grid = document.createElement("div");
    grid.classList.add("squares");
    container.appendChild(grid);
  }
}

etch(14);

rainbowColor = () => {
  const squares = container.querySelectorAll(".squares");
  squares.forEach((squares) =>
    squares.addEventListener("mouseover", () => {
      squares.style.background = `${random_bg_color()}`;
    })
  );
};

rainbowColor();

rainbowOn = () => {
  rainbowBtn.addEventListener("click", rainbowColor);
};

rainbowOn();

blackColor = () => {
  const squares = container.querySelectorAll(".squares");
  blackBtn.addEventListener("click", () => {
    squares.forEach((squares) =>
      squares.addEventListener("mouseover", () => {
        squares.style.background = `black`;
      })
    );
  });
};
blackColor();

eraserColor = () => {
  const squares = container.querySelectorAll(".squares");
  eraserBtn.addEventListener("click", () => {
    squares.forEach((squares) =>
      squares.addEventListener("mouseover", () => {
        squares.style.background = `white`;
      })
    );
  });
};
eraserColor();

removeGrid = () => {
  const squares = container.querySelectorAll(".squares");
  squares.forEach((squares) => squares.remove());
};

clearOption = () => {
  clearBtn.addEventListener("click", () => {
    let howManySquares = prompt("How many squares per side?");
    if (howManySquares === null || howManySquares < 1) {
      removeGrid();
      etch(14);
      rainbowColor();
      blackColor();
      eraserColor();
    } else if (howManySquares > 100) {
      alert("Please enter a number less than 100.");
      removeGrid();
      etch(14);
      rainbowColor();
      blackColor();
      eraserColor();
    } else {
      removeGrid();
      etch(howManySquares);
      rainbowColor();
      blackColor();
      eraserColor();
    }
  });
};

clearOption();
