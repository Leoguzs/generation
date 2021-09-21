let nombre = prompt('¡Cual es tu nombre?')


let edad = prompt('Cual es tu edad?')

document.write('Hola ' + nombre + ' tienes ' + edad + 'años ')


///////////////////////////////Template string///////////////////////////////

const saludo = `<h1>hola, ${nombre} tu edad es ${edad} años </h1>`
document.write(saludo)   