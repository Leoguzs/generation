const $cardsContainer = document.querySelector('#cardsContainer')

/* Voy a hacer una función que me permita hacer un ciclo */

let mostrarCards = () =>{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json()).then(json =>{
        json.forEach(element => {
            let col = document.createElement('div')
            col.classList.add('col-md-4')
            col.classList.add('col-sm-6') 
            col.classList.add('mb-3') 
            col.innerHTML = `<div class="card" ">
            <img src="${element.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${element.title}</p>
            </div>
          </div>`
          ;
          $cardsContainer.appendChild(col)
        });
    })
}

mostrarCards()