 const persona = {   //clave y valor
    nombre: 'julian',
    apellidos: 'sanches',
    email: 'sdd@gmail.com'
}

console.log(persona.nombre) 

///////////////////edad///////////////
let añoNacimiento = parseInt( prompt('¿En qué año naciste?'))

let calculadoraEdad = (añoNacimiento) => {
    let edad = 2021 - añoNacimiento
    console.log(`Tienes ${edad} años`)
}

let edad = calculadoraEdad(añoNacimiento)

/////////////////////////par////////////////////////////
let numero = parseInt( prompt('Ingresa un número'))

let parImpar = (numero) =>{
    if(numero%2==0) {
            console.log(`el numero ${numero} es par`)
    } else {
        console.log(`el numero ${numero} es impar`)
    }
}
parImpar(numero)



/////////////////////////numeros impares//////////////////
/* Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario
 */

let num1 = parseInt(prompt('ingresa un numero')),
num2 =  parseInt(prompt('Ingresa otro numero'))


let parImpar = (num1, num2) =>{
  
   for(let i = num1; i<num2; i+=1){
    if(i%2!==0){
       let array = []
       array.push(i)
       console.log(`${array}`)
   }
}
}
parImpar(num1, num2) 


let numero1 = parseInt(prompt('ingresa un numero')),
    numero2 =  parseInt(prompt('Ingresa otro numero'))

for(let i= numero1+1; i<numero2; i++){
    if(i&2!=0){
     console.log(i)
     
    }
    
}


