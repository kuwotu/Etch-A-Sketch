let container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.classList.add("squares");

  changeColor = () => {
    grid.style.cssText = "background-color: pink";
  };

  grid.addEventListener("mouseenter", changeColor);

  container.appendChild(grid);
}

let restartbtn = document.querySelector(".restart-button");

function refresh() {
  window.location.reload();
}

restartbtn.addEventListener("click", refresh);
