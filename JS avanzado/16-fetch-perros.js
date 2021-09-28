const $btn = document.querySelector('.btn')
const $contenedor = document.querySelector('.contenedor')

$btn.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()).then(json=>{
        console.log(json)
        const imgDog = document.createElement('img')
        imgDog.src = json.message
        $contenedor.appendChild(imgDog)
        $contenedor.appendChild($btn)

    })
})