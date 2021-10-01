const $cardContainer = document.querySelector('#cardContainer')


// Ejercicio 

try{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json()).then(json => {
        json.forEach(element => {
            let div = document.createElement('div')
            div.classList = 'col-md-3 col-sm-6'
            /* div.classList.add('col-sm-6') */
            div.innerHTML= `<div class="card" ">
            <img src="${element.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${element.title}</p>
            </div>
          </div>`

          $cardContainer.appendChild(div)
            
        });
    } )
    
} catch(e) {
    console.log(e)
}

    


console.log('---------------------------------------')
////////////////////////////////Hacer lo mismo pero con otr API y con Async Await//////////////////////////////////
const URL_API = 'https://pokeapi.co/api/v2/pokemon/'
try{
     fetch (URL_API)
     .then(resp => resp.json()).then(json => {
       console.log(json)
      
     })
} catch (e){
  console.log(e)
} finally{
  console.log('Otra prueba con una API')
}