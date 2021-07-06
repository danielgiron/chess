//selectors
boardContainer = document.querySelector(".board__container");

////initializing board
let board = [];

for (let i = 0; i < 8; i++) {
  let row = [];
  for (let n = 0; n < 8; n++) {
    let cell = "" + i + n;
    row.push(cell);
  }
  board.push(row);
}

board.forEach((row) => {
  row.forEach((cell) => {
    const newBlock = document.createElement("div");
    newBlock.classList.add("gridBlock");
    //console.log(cell);
    newBlock.id = cell;
    boardContainer.appendChild(newBlock);
  });
  const br = document.createElement("br");
  boardContainer.appendChild(br);
});
////end of inititializing board

//to select cell on boardContainer
boardContainer.onclick = (e) => {
  console.log(e.target.id); // get the element by id
  var cell = document.getElementById(e.target.id);
  try {
    if (cell.innerText === "") {
      cell.innerText = "♕";
    } else {
      cell.innerText = "";
    }
  } catch {
    //not a cell
  }
};
