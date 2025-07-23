document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/images")
    .then(res => res.json())
    .then(data => {
      const gallery = document.getElementById("gallery");
      data.forEach(img => {
        const box = document.createElement("div");
        box.className = "image-box";
        box.innerHTML = `
          <a href="image.html?id=${img.id}">
            <img src="http://localhost:3000/uploads/${img.filename}" alt="${img.title}">
            <p>${img.title}</p>
          </a>
        `;
        gallery.appendChild(box);
      });
    });
});