// BACKGROUND
const canvas = <HTMLCanvasElement>document.getElementsByTagName('canvas')[0], ctx = canvas.getContext("2d")

const resetCanvas = () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   const mult = window.innerWidth > 900? 1.1: 1;
   canvas.width = window.innerWidth * mult;
   canvas.height = window.innerHeight * mult;
}

resetCanvas()
window.onresize = resetCanvas

setInterval(() => {
   let x = Math.floor(Math.random() * canvas.offsetWidth);
   let y = Math.floor(Math.random() * canvas.offsetHeight);
   ctx.fillStyle = "#fafafa";
   ctx.fillRect(x,y,1,1);
   setTimeout(() => {
      ctx.fillStyle = "#050505";
      ctx.fillRect(x,y,1,1);
   }, 15000);
}, 75);

window.onmousemove = (e) => {
   const mouseX = e.clientX / window.innerWidth * 5;
   const mouseY = e.clientY / window.innerHeight * 5;
   if (window.innerWidth > 900) canvas.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
}


// PARALLAX EFFECT
window.onscroll = () => {
   canvas.style.top = Math.round(window.scrollY*0.9).toString()+'px';
   document.getElementsByTagName('main')[0].style.top = Math.round(window.scrollY/2).toString()+'px';
}


// GLITCH EFFECT
setInterval(() => {
   let msg1 = 'Hi, I\'m Ronan', msg2 = 'I do fun things online'
   for (let i = 0; i < msg1.length; i++) {
      if(Math.random() > .99 && msg1[i] != ' ') {
         msg1 = setChar(msg1, i);
         setTimeout(() => {
            msg1 = setChar(msg1, i, 'Hi, I\'m Ronan'[i]);
         }, 300)
      }
   }
   for (let i = 0; i < msg2.length; i++) {
      if(Math.random() > .99 && msg2[i] != ' ') {
         msg2 = setChar(msg2, i);
         setTimeout(() => {
            msg2 = setChar(msg2, i, 'I do fun things online'[i]);
         }, 300)
      }
   }
   document.querySelector('main p').innerHTML = msg1 + '<br>' + msg2;
}, 100)

window.onload = () => document.getElementsByTagName('main')[0].style.opacity = '1';

function setChar(msg: string, i: number, char: string = Math.random().toString(36)[10]) {
   return msg.substr(0, i) + char + msg.substr(i + 1);
}

const scrollDown = () => window.scroll({
   top: window.innerHeight,
   behavior: 'smooth'
});