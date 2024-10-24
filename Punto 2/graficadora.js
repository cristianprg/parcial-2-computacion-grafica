const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let lastX = centerX; // Comienza en el origen (0, 0)
let lastY = centerY;

// Dibuja los ejes
function drawAxes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Eje X
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Eje Y
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.strokeStyle = '#000';
    ctx.stroke();
}

// Dibuja la línea desde el último punto hasta el nuevo punto ingresado
function drawLine() {
    const x = parseInt(document.getElementById('xValue').value);
    const y = parseInt(document.getElementById('yValue').value);

    const canvasX = centerX + x;
    const canvasY = centerY - y; // Restar porque las coordenadas Y en canvas crecen hacia abajo

    // Dibuja la línea desde el último punto registrado
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // Comienza en el punto final anterior
    ctx.lineTo(canvasX, canvasY); // Hasta el nuevo punto
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Actualiza el último punto como el nuevo punto final
    lastX = canvasX;
    lastY = canvasY;
}

// Función para limpiar el canvas y resetear el punto inicial
function clearCanvas() {
    drawAxes(); // Redibuja los ejes
    lastX = centerX; // Reinicia el último punto al origen
    lastY = centerY;
}

// Dibuja los ejes inicialmente
drawAxes();