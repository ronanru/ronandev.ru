const canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
const resetCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const mult = window.innerWidth > 900 ? 1.1 : 1;
    canvas.width = window.innerWidth * mult;
    canvas.height = window.innerHeight * mult;
};
resetCanvas();
window.onresize = resetCanvas;
const setPixel = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
};
setInterval(() => {
    let x = Math.floor(Math.random() * canvas.offsetWidth);
    let y = Math.floor(Math.random() * canvas.offsetHeight);
    setPixel(x, y, '#fafafa');
    setTimeout(() => setPixel(x, y, '#050505'), 15000);
}, 75);
window.onmousemove = e => {
    const mouseX = (e.clientX / window.innerWidth) * 5;
    const mouseY = (e.clientY / window.innerHeight) * 5;
    if (window.innerWidth > 900)
        canvas.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
};
setInterval(() => {
    let msg = ["Hi, I'm Ronan", 'I do fun things online'];
    const initialMsg = msg;
    for (let ii in msg)
        for (let i = 0; i < msg[ii].length; i++) {
            if (Math.random() > 0.99 && msg[ii][i] != ' ') {
                msg[ii] = setChar(msg[ii], i, Math.random().toString(36)[10]);
                setTimeout(() => {
                    msg[ii] = setChar(msg[ii], i, initialMsg[ii][i]);
                }, 300);
            }
        }
    document.querySelector('main p').innerHTML = msg.join('<br>');
}, 100);
const setChar = (msg, i, char) => msg.substr(0, i) + char + msg.substr(i + 1);
//# sourceMappingURL=main.js.map