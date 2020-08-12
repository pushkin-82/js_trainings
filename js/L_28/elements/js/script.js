'use strict';

const box = document.getElementById('box');

console.log(box);

const buttons = document.getElementsByTagName('button');

console.log(buttons[2]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);    
});

