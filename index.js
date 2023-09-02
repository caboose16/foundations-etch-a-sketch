const containerDiv = document.querySelector("#etch-board");

function coverEtchSquare() {
    this.classList.add("etch-square-covered")
}

var deleteBoard = () => containerDiv.childNodes.forEach( (n) => n.remove() );

function generateCleanBoard(){
    const rows = 16;
    const cols = 16;

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

generateCleanBoard();