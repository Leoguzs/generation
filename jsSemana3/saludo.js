/* 1.- Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo: 
"Hola nombre, saludos desde javascript". 
Nota: El saludo puede ser mostrado por consola o por html. */


/* let name = prompt('Cuál es tu nombre amigue?')
let message = ('Hola, ' + name.toUpperCase() + ', saludos desde javascript')  //or lowerase

document.write(message) */

/* Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
 */

var num1 =parseInt(prompt('Ingresa el primer número')),  //parseInt() para copnvertir texto a suma
num2 = parseInt(prompt('Ingresa el segundo número'));

function operaciones (num1, num2){
    let div = num1 / num2;
    console.log(`División: ${div}`)
    let mult = num1 * num2;
    console.log(`Mult: ${mult}`)
    let res = num1 - num2;
    console.log(`Resta: ${res}`)
    let sum = num1 + num2
    console.log(`suma: ${sum}`)
}

operaciones(num1,num2)