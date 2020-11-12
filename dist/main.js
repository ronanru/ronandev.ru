// BACKGROUND
var canvas = document.getElementsByTagName('canvas')[0], ctx = canvas.getContext("2d");
var resetCanvas = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var mult = window.innerWidth > 900 ? 1.1 : 1;
    canvas.width = window.innerWidth * mult;
    canvas.height = window.innerHeight * mult;
};
resetCanvas();
window.onresize = resetCanvas;
setInterval(function () {
    var x = Math.floor(Math.random() * canvas.offsetWidth);
    var y = Math.floor(Math.random() * canvas.offsetHeight);
    ctx.fillStyle = "#fafafa";
    ctx.fillRect(x, y, 1, 1);
    setTimeout(function () {
        ctx.fillStyle = "#050505";
        ctx.fillRect(x, y, 1, 1);
    }, 15000);
}, 75);
window.onmousemove = function (e) {
    var mouseX = e.clientX / window.innerWidth * 5;
    var mouseY = e.clientY / window.innerHeight * 5;
    if (window.innerWidth > 900)
        canvas.style.transform = "translate3d(-" + mouseX + "%, -" + mouseY + "%, 0)";
};
// PARALLAX EFFECT
window.onscroll = function () {
    canvas.style.top = Math.round(window.scrollY * 0.9).toString() + 'px';
    document.getElementsByTagName('main')[0].style.top = Math.round(window.scrollY / 2).toString() + 'px';
};
// GLITCH EFFECT
setInterval(function () {
    var msg1 = 'Hi, I\'m Ronan', msg2 = 'I do fun things online';
    var _loop_1 = function (i) {
        if (Math.random() > .99 && msg1[i] != ' ') {
            msg1 = setChar(msg1, i);
            setTimeout(function () {
                msg1 = setChar(msg1, i, 'Hi, I\'m Ronan'[i]);
            }, 300);
        }
    };
    for (var i = 0; i < msg1.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        if (Math.random() > .99 && msg2[i] != ' ') {
            msg2 = setChar(msg2, i);
            setTimeout(function () {
                msg2 = setChar(msg2, i, 'I do fun things online'[i]);
            }, 300);
        }
    };
    for (var i = 0; i < msg2.length; i++) {
        _loop_2(i);
    }
    document.querySelector('main p').innerHTML = msg1 + '<br>' + msg2;
}, 100);
function setChar(msg, i, char) {
    if (char === void 0) { char = Math.random().toString(36)[10]; }
    return msg.substr(0, i) + char + msg.substr(i + 1);
}
var scrollDown = function () { return window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
}); };
