const $btn = document.querySelector('.btn')


$btn.addEventListener('click', ()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then((data) => {
        console.log(data)

    /* desestructuraicon para sacar elementos de un arreglo */
    const imgCat = document.createElement('img')
    imgCat.src = data[0].url;   //porque es un arreglo de objetos
    document.body.append(imgCat)
    })
})




// hacerlo pero con las desestructuracion. Hint:    const [cat] = json;