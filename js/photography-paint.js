async function loadPhotos() {
  const response = await fetch("json/photos.json");
  const photos = await response.json();
  var photoSection = document.querySelector(".photos");

  for (const photo of photos) {
    const newDiv = document.createElement("div");
    const className = photo.Name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    newDiv.classList.add(className);

    var img = document.createElement("img")
    img.src = photo.Location;
    newDiv.appendChild(img);

    const newTitle = document.createElement("p");
    newTitle.textContent = `${photo.Name}, ${photo.Year}`;
    newDiv.appendChild(newTitle);

    const newDesc = document.createElement("p");
    newDesc.innerHTML = `${photo.Size}<br>${photo.Material}`;
    newDiv.appendChild(newDesc);

    photoSection.appendChild(newDiv);
  }
}

loadPhotos();