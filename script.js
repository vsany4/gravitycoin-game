
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Fake BTC graph data
let data = Array.from({ length: 100 }, (_, i) =>
  150 + 50 * Math.sin(i / 10)
);

// Draw graph
ctx.beginPath();
ctx.moveTo(0, 300 - data[0]);
for (let i = 1; i < data.length; i++) {
  ctx.lineTo(i * 6, 300 - data[i]);
}
ctx.strokeStyle = "#00ff88";
ctx.stroke();

// Draw rider
let x = 0;
let interval = setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redraw track
  ctx.beginPath();
  ctx.moveTo(0, 300 - data[0]);
  for (let i = 1; i < data.length; i++) {
    ctx.lineTo(i * 6, 300 - data[i]);
  }
  ctx.strokeStyle = "#00ff88";
  ctx.stroke();

  // Rider
  const y = 300 - data[Math.floor(x / 6)];
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#ff5555";
  ctx.fill();

  x += 2;
  if (x > canvas.width) {
    clearInterval(interval);
    alert("Фініш! Ви проїхали весь трек.");
  }
}, 30);
