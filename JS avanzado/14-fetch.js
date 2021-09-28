//fetch nos permite hacer peticiones http desde javascript
const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const peticion = fetch(API_URL)   //por defecto hace un GET a menos que configuremos otro
.then(response => response.json())   //me devuelve otra promesa
.then(data=> {
    console.log(data)
}).catch(e =>{
    console.log(e)
});
console.log(peticion)

