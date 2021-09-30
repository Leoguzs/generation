const $cardContainer = document.querySelector('#cardContainer')


// Ejercicio 
try {
    fetch('https://api.thecatapi.com/v1/images/search')
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

} catch (e) {
    console.log(e)
} finally {
    console.log('Este es un ejercicio de try-catch')
}

////////////////////////////////Hacer lo mismo pero con otr API y con Async Await//////////////////////////////////