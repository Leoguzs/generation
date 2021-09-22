/* switchEstructura */


/* const edad = parseInt(prompt('edad'))
let mensaje ='';

switch (edad){
    case 18:
        mensaje= 'Acaba de cumplir la mayoría de edad'
        break;
    case 25: 
        mensaje = 'Ya eres un adulto'
        break;
    case 70:
        mensaje= 'Aguas con el covid'
        break;
    default:
        mensaje= 'fuera del rango de edad'
        break;


}

document.write(`${mensaje}`)
 */


let nombre = prompt('Ingresa tu nombre')
let mensaje = ''

switch (nombre.toLowerCase) {
    case 'Leonardo': 
        mensaje= 'admin'
        break;
    case 'pedro':
        mensaje='usuario'
        break;
    default:
        mensaje= 'no tienes acceso'
    
}

document.write(`${mensaje}`)