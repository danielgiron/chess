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

//create all 64 cell divs to make up the board and add "cell" to their classlist
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let alpha = 0; //index variable of letters[]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let num = 0; //index variable of numbers[]

let cellFlip = true; //used to create alternating cells classed as "even" or not
board.forEach((row) => {
  row.forEach((cell) => {
    const newBlock = document.createElement("div");
    newBlock.classList.add("cell");
    if (cellFlip) {
      newBlock.classList.add("even");
    }
    cellFlip = !cellFlip;
    cellId = "" + letters[alpha] + numbers[num];
    newBlock.id = cellId;
    boardContainer.appendChild(newBlock);

    num = num + 1;
  });
  const br = document.createElement("br");
  boardContainer.appendChild(br);
  cellFlip = !cellFlip;
  num = 0;
  alpha = alpha + 1;
});

//dictionary containing all pieces and their starting cells as key value pairs
let pieces = {
  blackTower1: "a1",
  blackTower2: "a8",
  blackKnight1: "a2",
  blackKnight2: "a7",
  blackBishop1: "a3",
  blackBishop2: "a6",
  blackKing: "a5",
  blackQueen: "a4",
  blackPawn1: "b1",
  blackPawn2: "b2",
  blackPawn3: "b3",
  blackPawn4: "b4",
  blackPawn5: "b5",
  blackPawn6: "b6",
  blackPawn7: "b7",
  blackPawn8: "b8",
  whiteTower1: "h1",
  whiteTower2: "h8",
  whiteHorse1: "h2",
  whiteHorse2: "h7",
  whiteBishop1: "h3",
  whiteBishop2: "h6",
  whiteKing: "h5",
  whiteQueen: "h4",
  whitePawn1: "g1",
  whitePawn2: "g2",
  whitePawn3: "g3",
  whitePawn4: "g4",
  whitePawn5: "g5",
  whitePawn6: "g6",
  whitePawn7: "g7",
  whitePawn8: "g8",
};

//places all pieces in their initial cells
function setup() {
  for (const [key, value] of Object.entries(pieces)) {
    let cell = document.getElementById(value);
    switch (key) {
      /////////// BLACK PIECES
      case "blackTower1":
      case "blackTower2":
        cell.innerText = "♜";
        break;
      case "blackKnight1":
      case "blackKnight2":
        cell.innerText = "♞";
        break;
      case "blackBishop1":
      case "blackBishop2":
        cell.innerText = "♝";
        break;
      case "blackKing":
        cell.innerText = "♚";
        break;
      case "blackQueen":
        cell.innerText = "♛";
        break;
      case "blackPawn1":
      case "blackPawn2":
      case "blackPawn3":
      case "blackPawn4":
      case "blackPawn5":
      case "blackPawn6":
      case "blackPawn7":
      case "blackPawn8":
        cell.innerText = "♟︎";
        break;
      /////////// WHITE PIECES
      case "whiteTower1":
      case "whiteTower2":
        cell.innerText = "♖";
        break;
      case "whiteHorse1":
      case "whiteHorse2":
        cell.innerText = "♘";
        break;
      case "whiteBishop1":
      case "whiteBishop2":
        cell.innerText = "♗";
        break;
      case "whiteKing":
        cell.innerText = "♔";
        break;
      case "whiteQueen":
        cell.innerText = "♕";
        break;
      case "whitePawn1":
      case "whitePawn2":
      case "whitePawn3":
      case "whitePawn4":
      case "whitePawn5":
      case "whitePawn6":
      case "whitePawn7":
      case "whitePawn8":
        cell.innerText = "♙";
        break;
      default:
        break;
    }
  }
}
setup();

////end of inititializing board

//to select cell in boardContainer

var cellStack = [];
boardContainer.addEventListener("click", moveFunc);

function moveFunc(event, cellStack) {
  try {
    var cell = event.target;
    console.log(cell.id);
    if (!cell.innerText === "") {
      cellStack.push(cell);
      console.log(cellStack);
    }
  } catch {}
  console.log(cellStack);
}

if (!cellStack.length === 1) {
  let cell1 = cellStack[0];
  let cell2 = cellStack[1];
  let tempCellVal = cell2.innerText;

  cell2.innerText = cell1.innerText;
  cell1.innerText = tempCellVal;
}

// boardContainer.onclick = (e) => {
//   console.log(e.target.id); // get the element by id
//   //   var firstCell = document.getElementById(e.target.id);
//   //   let firstVal = firstCell.innerText;
//   //   document.title = e.target.id;
//   //   console.log(firstVal);
// };
