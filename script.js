// 🌹 Floating roses
const rosesContainer = document.querySelector(".roses");

function createRose() {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.innerText = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.fontSize = Math.random() * 15 + 20 + "px";
  rose.style.animationDuration = Math.random() * 3 + 5 + "s";
  rosesContainer.appendChild(rose);
  setTimeout(() => rose.remove(), 7000);
}
setInterval(createRose, 400);

// 💖 Dynamic name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  document.getElementById("title").innerText =
    `${name}, 🌹 Rose Day Special 🌹`;
}

// 😳 Secret message popup
const secretBtn = document.getElementById("secretBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

secretBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
