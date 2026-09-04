async function loadPrints() {
  const response = await fetch("~/json/prints.json");
  const prints = await response.json();
  const printSection = document.querySelector(".prints")
  var numRows = 0;
  for (const print of prints) {
    if (print.Row > numRows) {
        numRows = print.Row;
        const newSection = document.createElement("section");
        newSection.classList.add(`row${print.Row}`);
        printSection.appendChild(newSection);
    }
  }

  for (const print of prints) {
    const newDiv = document.createElement("div");
    const className = print.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    newDiv.classList.add(className);

    var img = document.createElement("img")
    img.src = print.Location;
    newDiv.appendChild(img);

    const newTitle = document.createElement("p");
    newTitle.textContent = `${print.Name}, ${print.Year}`;
    newDiv.appendChild(newTitle);

    const newDesc = document.createElement("p");
    newDesc.innerHTML = `${print.Size}<br>${print.Material}`;
    newDiv.appendChild(newDesc);

    const rowName = `.row${print.Row}`;
    const curRow = document.querySelector(rowName);
    curRow.appendChild(newDiv);
  }
}

loadPrints();