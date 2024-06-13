document.getElementById('startButton').addEventListener('click', startSimulation);
document.getElementById('updateButton').addEventListener('click', updateParameters);

let height = 0;
let weight = 0;
let radius = 0;
let y = 0;
let velocity = 0;

function updateParameters() {
    height = parseFloat(document.getElementById('heightInput').value);
    weight = parseFloat(document.getElementById('weightInput').value);
    y = 0;
    radius = 10 + 50 / (height + 1); // Kisebb méret nagyobb magasságnál
    velocity = 0;
    drawObject();
}

function startSimulation() {
    if (height <= 0 || weight <= 0) {
        alert('Kérlek, adj meg érvényes magasságot és súlyt!');
        return;
    }

    const canvas = document.getElementById('simulationCanvas');
    const context = canvas.getContext('2d');
    const gravity = 9.8;
    const timeInterval = 0.02;

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(canvas.width / 2, y, radius, 0, Math.PI * 2);
        context.fill();
    }

    function update() {
        velocity += (gravity * weight / 100) * timeInterval;
        y += velocity;

        if (y >= canvas.height - radius) {
            y = canvas.height - radius;
            clearInterval(interval);
        }
    }

    function simulate() {
        update();
        draw();
    }

    const interval = setInterval(simulate, timeInterval * 1000);
}

function drawObject() {
    const canvas = document.getElementById('simulationCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(canvas.width / 2, 0, radius, 0, Math.PI * 2);
    context.fill();
}
