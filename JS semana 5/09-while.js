/* nos permite repetir blques de código mientras una condición sea verdadera */

/* let num1 = parseInt(prompt('Ingresa un número'))


while(isNaN(num1)){
     num1= parseInt(prompt('Ingresa un numero'))
} */

/* let num1 = parseInt(prompt('Ingresa un numero'))

while(num1 !==23){
    console.log('no adivinaste el numero, intenta de nuevo')
    num1 =  parseInt(prompt('Ingresa un numero'))
}
console.log('encontraste el numero secreto') */

/* let num= parseInt(prompt('Ingresa un numero'))
do {
    document.write(`<p>El rok ha muerto </p>`)
}

while (num>5) */


/* 
let num= parseInt(prompt('Ingresa un numero'))
let suma=0;
let contador = 0;
let numeros = [];

while (num >=0){
    suma=suma+num
    contador++
    numeros.push(num);
    num=parseInt(prompt('Ingresa un numero'))
    
}
console.log(suma)
console.log(suma/contador)
console.log(`Los numeros ingresados son ${numeros}`)

 */

let num= parseInt(prompt('Ingresa un numero'))
let contador = 0;
console.log(`el numero ${num} es divisible entre`)

while(contador<=num){

    contador++

    if(num%contador==0){
        console.log(` ${contador}`)
    }
    
}
