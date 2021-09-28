let lista = document.querySelector('ul')

let btn = document.querySelector('#btn')



btn.addEventListener('click', ()=>{
    let nuevoElemento = document.createElement('li')    //crea etiqueta
    nuevoElemento.textContent= 'HOLA'
    lista.appendChild(nuevoElemento)                    //lo agrega como hijo
})