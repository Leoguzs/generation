let edad = document.querySelector('#input')
let mensaje = document.querySelector('#mensaje')


let accion = ()=>{
    let valorEdad = edad.value;
    mensaje.innerHTML= (valorEdad>=18)? 'Puedes votar': 'No puedes votar'
}


let boton = document.querySelector('.boton')
boton.onclick = ()=>{
    alert('Hola')
}

const button = document.querySelector("#button");  //seleccioné el elemnto que quería 
button.addEventListener("click", function() {
  alert("Hello!");
});