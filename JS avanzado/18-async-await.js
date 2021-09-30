const $btn = document.querySelector('.btn')


$btn.addEventListener('click', async ()=>{
const resp= await fetch('https://api.thecatapi.com/v1/images/search')
 const data =await resp.json()
 const imgCat = document.createElement('img')
imgCat.src = data[0].url;   //porque es un arreglo de objetos
imgCat.width='300';
document.body.append(imgCat)
})



/* .then(resp => resp.json()).then((data) => {
    console.log(data) */

/* desestructuraicon para sacar elementos de un arreglo */
/* const imgCat = document.createElement('img')
imgCat.src = data[0].url;   //porque es un arreglo de objetos
imgCat.width='300';
document.body.append(imgCat)
}) */