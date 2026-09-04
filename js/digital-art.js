async function loadPieces() {
  const response = await fetch("/json/digital-art.json");
  const pieces = await response.json();
  const artSection = document.querySelector(".art")
  var numRows = 0;
  for (const piece of pieces) {
    if (piece.Row > numRows) {
        numRows = piece.Row;
        const newSection = document.createElement("section");
        newSection.classList.add(`row${piece.Row}`);
        artSection.appendChild(newSection);
    }
  }

  for (const piece of pieces) {
    const newDiv = document.createElement("div");
    const className = piece.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    newDiv.classList.add(className);

    var img = document.createElement("img")
    img.src = piece.Location;
    newDiv.appendChild(img);

    const rowName = `.row${piece.Row}`;
    const curRow = document.querySelector(rowName);
    curRow.appendChild(newDiv);
  }
}

loadPieces();