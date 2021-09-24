
/* Devuelve un arreglo con los elementos de la etiquta */
const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'Hola'   //escribes etiquetas html

const text = document.querySelector('#text')
text.textContent= 'Párrafo'    //text content es lo de dentro de etiqutas
text.style.background= 'blue';
text.style.color= 'white';

console.log(title)

/* Crear elementos html */
let div = document.createElement('div')
const body = document.querySelector('body')

body.append(div)  //ahora el div está dentro del body