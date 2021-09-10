// Inicio 
// Crear una estructura función que evalue tres cantidades , y devuelva la mayor de ellas
// Dentro de la funcion va a hacer comparaciones
// Insegrese las 3 cantidades
// Comparacion: caso 1: si el numero 1 es mayor al 2 y al 3, entonces vamos a imprimir que el
// numero 1 es el mas grande.

// caso 2: si el numero 2 es mayor al 1 y al 3, entonces vamos a imprimir que el
// numero 3 es el mas grande.

// caso 3: si el numero 3 es mayor al 1 y al 2, entonces vamos a imprimir que el
// numero 3 es el mas grande. (el 3 es más grande)

function comparacion (n1, n2, n3){
    if (n1 > n2 && n1>n3) {
        console.log(`${n1}`)
    } else if (n2 > n1 && n2>n3) {
        console.log(`${n2}`)
    } else {
        console.log(`${n3}`)
    }
}

comparacion(100,8,55)

// let arreglo = [1,4,12];
// function comparacion (arreglo){
//     arreglo.sort();
//     arreglo.reverse()
  

//    console.log(arreglo[1])
// }

// comparacion(arreglo)