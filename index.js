const containerDiv = document.querySelector("#etch-board");

function coverEtchSquare() {
    this.classList.add("etch-square-covered")
}

function deleteBoard() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function generateCleanBoard(rows, cols){
    rows ??= 16;
    cols ??= 16;

    deleteBoard();

    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("etch-row");
        
        for (let i = 0; i < cols; i++) {
            let div = document.createElement("div");
            div.classList.add("etch-square");
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

generateCleanBoard();