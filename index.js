const containerDiv = document.querySelector("#etch-board");

function coverEtchSquare() {
    this.classList.add("etch-square-covered")
}

function deleteBoard() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function calculateEtchSquareSize(rows) {
    const maxWidth = 960;
    let size = Math.floor(maxWidth / rows);

    return size;
}

function generateCleanBoard(rows, cols){
    rows ??= 16;
    cols ??= 16;
    let squareSideLength = calculateEtchSquareSize(rows, cols) + "px";

    deleteBoard();

    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("etch-row");
        
        for (let i = 0; i < cols; i++) {
            let div = document.createElement("div");
            div.classList.add("etch-square");
            div.style.height = squareSideLength;
            div.style.width = squareSideLength;
            div.addEventListener("mouseover", coverEtchSquare);
            rowDiv.appendChild(div);
        }

        containerDiv.appendChild(rowDiv)
    }
}

function newBoard() {
    let rows = prompt("Please enter the number of rows for the board");
    if (rows === null) return;
    if (isNaN(rows) || rows < 1 || rows > 100) {
        window.alert("Invalid input for rows. Please enter a number from 1-100");
    }

    let cols = prompt("Please enter the number of columns for the board");
    if (cols === null) return;
    if (isNaN(cols) || cols < 1 || cols > 100) {
        window.alert("Invalid input for cols. Please enter a number from 1-100");
    }

    generateCleanBoard(rows, cols);
}

function resetBoard() {
    let etchSquares = document.querySelectorAll(".etch-square");
    etchSquares.forEach( (n) => n.classList.remove("etch-square-covered"));
}

generateCleanBoard();