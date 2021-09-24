const $btn = document.querySelector('#btn')

$btn.addEventListener('mouseover', ()=>{
    console.log(':0')
    /* alert('me presionaste') */
})


const $inpText = document.querySelector('.text')
$inpText.addEventListener('keydown', (e)=>{
    console.log(e.target.value) /* así obtenemos lo que el usuario esta tecleando */
 /* alert('me presionaste') */
})