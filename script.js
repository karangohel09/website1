const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});