document.addEventListener("mousemove", function (event) {
  document.getElementById("x").textContent = event.clientX;
  document.getElementById("y").textContent = event.clientY;
});
