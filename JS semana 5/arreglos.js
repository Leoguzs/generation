let arreglo = []

let lenguajes = ['Javascript', 'Java', 'PHP', 'Rust', 'C#', 'Scala', 'Cobol']


/* For each: nos permite recorrer los elementos de un arreglo */
//forEach
document.write('<ul>')
lenguajes.forEach((lenguaje, index) => {
    document.write(`<li> ${index}.- ${lenguaje}</li>`)
});
document.write('</ul>')


/* Map crea un nuevo arreglo con los resultados */
let numeros = [2, 4, 76, 5, 67, 9];

let numeros2 = numeros.map((numero)=>{
    return numero * 2
})

console.log(numeros)
console.log(numeros2)


////////Determina si un arreglo contiene un valor
console.log(!lenguajes.includes('PHP'))    //hace juego con replace


/* Filter crea un nuevo arreglo con todos los elementos que cumplan con la condición implementada */

let filtrados = numeros.filter((numero)=>{
    if(numero>10){
        return numero;
    }
})

console.log(filtrados)