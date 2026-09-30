'use strict';

const classes = ['first', 'second', 'third', 'fourth'];

const p1 = document.querySelector("#p1");
p1.style.backgroundColor = "gold";

const p2 = document.querySelector('#p2');
p2.style = "background-color: gold; color: blue; font-size: 2rem;";

const p3 = document.querySelector('#p3');
p3.className = 'third';

const p4 = document.querySelector('#p4');
p4.classList.add('fourth');
p4.classList.add('border');


const button1 = document.querySelector('#p1 > button');
button1.style = "background-color: gold; color: blue;";

const button2 = document.querySelector('#p2 > button');
button2.onclick = ()=> p1.style.display = "none";

const button3 = document.querySelector('#p3 > button');
button3.onclick = ()=> p1.style.display = "block";

const button4 = document.querySelector('#p4 > button');
button4.onclick = ()=> document.body.classList.toggle('dark-theme');


