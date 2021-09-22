/* Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo. */

let num1 = parseInt(prompt('dame un numero')),
 num2 = parseInt(prompt('dame otro numero'))
/* 
 num1 = Math.min(num1, num2)
 num2 = Math.max(num1, num2); */

 if (num1>num2){
     let suma = num1+num2
     let resta = num1 - num2
     console.log(`La suma es: ${suma} y la resta es: ${resta}`)
 } else if (num2>num1){
     let div = num2/num1
     let mult = num2 * num1
     console.log(`La división es: ${div} y la multiplicación es: ${mult}`)
 } else {
     console.log('mete numeros please')
 }