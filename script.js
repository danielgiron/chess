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

let pieces = {
  blackTower1: "00",
  blackTower2: "07",
  blackHorse1: "01",
  blackHorse2: "06",
  blackBishop1: "02",
  blackBishop2: "05",
  blackKing: "04",
  blackQueen: "03",
  blackPawn1: "10",
  blackPawn2: "11",
  blackPawn3: "12",
  blackPawn4: "13",
  blackPawn5: "14",
  blackPawn6: "15",
  blackPawn7: "16",
  blackPawn8: "17",
  whiteTower1: "70",
  whiteTower2: "77",
  whiteHorse1: "71",
  whiteHorse2: "76",
  whiteBishop1: "72",
  whiteBishop2: "75",
  whiteKing: "74",
  whiteQueen: "73",
  whitePawn1: "60",
  whitePawn2: "61",
  whitePawn3: "62",
  whitePawn4: "63",
  whitePawn5: "64",
  whitePawn6: "65",
  whitePawn7: "66",
  whitePawn8: "67",
};

function setup() {
  for (const [key, value] of Object.entries(pieces)) {
    console.log(key, value);
    let cell = document.getElementById(value);
    switch (key) {
      /////////// BLACK PIECES
      case "blackTower1":
      case "blackTower2":
        cell.innerText = "♜";
        break;
      case "blackHorse1":
      case "blackHorse2":
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
