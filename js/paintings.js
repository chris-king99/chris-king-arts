async function loadPaintings() {
  const response = await fetch("~/json/paintings.json");
  const paintings = await response.json();
  var paintingSection = document.querySelector(".paintings");

  for (const painting of paintings) {
    const newDiv = document.createElement("div");
    const className = painting.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    newDiv.classList.add(className);

    var img = document.createElement("img")
    img.src = painting.Location;
    newDiv.appendChild(img);

    const newTitle = document.createElement("p");
    newTitle.textContent = `${painting.Name}, ${painting.Year}`;
    newDiv.appendChild(newTitle);

    const newDesc = document.createElement("p");
    newDesc.innerHTML = `${painting.Size}<br>${painting.Material}`;
    newDiv.appendChild(newDesc);

    paintingSection.appendChild(newDiv);
  }
}

loadPaintings();