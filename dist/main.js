"use strict";
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const resetCanvas = () => {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
    const mult = window.innerWidth > 900 ? 1.1 : 1;
    canvas.width = window.innerWidth * mult;
    canvas.height = window.innerHeight * mult;
};
resetCanvas();
window.onresize = resetCanvas;
const setPixel = (x, y, color) => {
    if (!ctx)
        return;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
};
setInterval(() => {
    const x = Math.floor(Math.random() * canvas.offsetWidth);
    const y = Math.floor(Math.random() * canvas.offsetHeight);
    setPixel(x, y, '#fafafa');
    setTimeout(() => setPixel(x, y, '#050505'), 15000);
}, 75);
window.onmousemove = (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 5;
    const mouseY = (e.clientY / window.innerHeight) * 5;
    if (window.innerWidth > 900)
        canvas.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
};
const p = document.querySelector('.info p');
setInterval(() => {
    let msg = ["Hi, I'm Ronan", 'I do fun things online'];
    for (let ii = 0; ii < msg.length; ii++)
        for (let i = 0; i < msg[ii].length; i++)
            if (Math.random() > 0.99 && msg[ii][i] != ' ' && msg[ii])
                msg[ii] = setChar(msg[ii], i, Math.random().toString(36)[10]);
    if (p)
        p.innerHTML = msg.join('<br>');
}, 100);
const setChar = (msg, i, char) => msg.substr(0, i) + char + msg.substr(i + 1);
//# sourceMappingURL=main.js.map