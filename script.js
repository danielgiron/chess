//selectors
boardContainer = document.querySelector(".board__container");

//create all 64 cell divs to make up the board and add "cell" to their classlist
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let alpha = 0; //index variable of letters[]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
let num = 0; //index variable of numbers[]

let cellFlip = true; //used to create alternating cells classed as "even" or not
letters.forEach((letter) => {
  numbers.forEach((number) => {
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
  whiteKnight1: "h2",
  whiteKnight2: "h7",
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
      case "whiteKnight1":
      case "whiteKnight2":
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
    }
  }
}
setup();

////end of inititializing board

//to select cell in boardContainer

let cellStack = [];
let possibleMoves = []; //contains id's of cells of legal moves
boardContainer.addEventListener("click", select);
boardContainer.addEventListener("mouseover", hoverOn);
boardContainer.addEventListener("mouseout", hoverOff);

function hoverOn(event) {
  if (event.target.classList.contains("cell")) {
    //console.log(event.target.id);
    switch (event.target.innerText) {
      case "♘":
        knightMoves(event);
        break;
      case "♙":
        pawnMoves(event);
        break;
    }
    //console.log(possibleMoves);
    highlightPossibleMoves();
    console.log(possibleMoves);
  }
}

function pawnMoves(event) {
  let alphaCord = event.target.id[0]; //alpha coordinate
  let numCord = event.target.id[1]; //number coordinate

  let newAlphaCord = letters[letters.indexOf(alphaCord) - 1];

  let highlightCellID = newAlphaCord + numCord;
  possibleMoves.push(highlightCellID);
}

function knightMoves(event) {
  let alphaCord = event.target.id[0]; //alpha coordinate
  let numCord = event.target.id[1]; //number coordinate

  try {
    let cellID1 =
      letters[letters.indexOf(alphaCord) - 2] +
      numbers[numbers.indexOf(numCord) - 1];
    if (letters.includes(cellID1[0]) && numbers.includes(cellID1[1])) {
      possibleMoves.push(cellID1);
    }
  } catch {
    console.log("Possible move 1 invalid");
  }
  try {
    let cellID2 =
      letters[letters.indexOf(alphaCord) - 2] +
      numbers[numbers.indexOf(numCord) + 1];
    if (letters.includes(cellID2[0]) && numbers.includes(cellID2[1])) {
      possibleMoves.push(cellID2);
    }
  } catch {
    console.log("Possible move 2 invalid");
  }
  try {
    let cellID3 =
      letters[letters.indexOf(alphaCord) - 1] +
      numbers[numbers.indexOf(numCord) + 2];
    if (letters.includes(cellID3[0]) && numbers.includes(cellID3[1])) {
      possibleMoves.push(cellID3);
    }
  } catch {
    console.log("Possible move 3 invalid");
  }
  try {
    let cellID4 =
      letters[letters.indexOf(alphaCord) + 1] +
      numbers[numbers.indexOf(numCord) + 2];
    if (letters.includes(cellID4[0]) && numbers.includes(cellID4[1])) {
      possibleMoves.push(cellID4);
    }
  } catch {
    console.log("Possible move 4 invalid");
  }
  try {
    ///TEST THIS ONE FOR OUT OF BOUNDS
    let cellID5 =
      letters[letters.indexOf(alphaCord) + 2] +
      numbers[numbers.indexOf(numCord) + 1];
    if (letters.includes(cellID5[0]) && numbers.includes(cellID5[1])) {
      possibleMoves.push(cellID5);
    }
  } catch {
    console.log("Possible move 5 invalid");
  }
  try {
    let cellID6 =
      letters[letters.indexOf(alphaCord) + 2] +
      numbers[numbers.indexOf(numCord) - 1];
    if (letters.includes(cellID6[0]) && numbers.includes(cellID6[1])) {
      possibleMoves.push(cellID6);
    }
  } catch {
    console.log("Possible move 6 invalid");
  }
  try {
    let cellID7 =
      letters[letters.indexOf(alphaCord) - 1] +
      numbers[numbers.indexOf(numCord) - 2];
    if (letters.includes(cellID7[0]) && numbers.includes(cellID7[1])) {
      possibleMoves.push(cellID7);
    }
  } catch {
    console.log("Possible move 7 invalid");
  }
  try {
    let cellID8 =
      letters[letters.indexOf(alphaCord) + 1] +
      numbers[numbers.indexOf(numCord) - 2];
    if (letters.includes(cellID8[0]) && numbers.includes(cellID8[1])) {
      possibleMoves.push(cellID8);
    }
  } catch {
    console.log("Possible move 8 invalid");
  }
}

function highlightPossibleMoves() {
  possibleMoves.forEach((cellID) => {
    try {
      let highlightCell = document.getElementById(cellID);
      highlightCell.classList.add("light");
    } catch {}
  });
}

function hoverOff(event) {
  //if (event.target.classList.contains("cell")) {
  dimPossibleMoves();
  //}
}

function dimPossibleMoves() {
  possibleMoves.forEach((cellID) => {
    try {
      let cells = boardContainer.children;
      for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (cell.classList.contains("cell")) {
          cell.classList.remove("light");
        }
      }

      possibleMoves = [];
    } catch {}
  });
}

function select(event) {
  //CHECK TARGET CLICKED IS CELL CLASS BEFORE CONTINUING
  if (event.target.classList.contains("cell")) {
    try {
      let cell = event.target;
      console.log(cell.id);

      cellStack.push(cell);
    } catch {
      console.log("not a cell");
    }

    if (cellStack.length > 1) {
      let cell1 = document.getElementById(cellStack[0].id);
      let cell2 = document.getElementById(cellStack[1].id);

      console.log("Cells swapped: ", [cell1, cell2]);
      let tempCellVal = cell2.innerText;

      cell2.innerText = cell1.innerText;
      cell1.innerText = tempCellVal;

      cellStack = [];
    }
  }
}
