/* Try nos permite ejecutar codigo propenso a fallar de una manera segura */
const gravedad = 9.8
console.log(gravedad)

/* Intenta ejecutar el codigo, si hay un error ejecuta el catch */
try{
    gravedad = 19

} catch(e) {
    /* el catch de ejecuta si hay error, recibe como primer parametro el error */
    console.log(e)
} finally {
/* el finally siempre se ejecuta */
    console.log('soy el finally')

}

console.log(gravedad)


/* ts check nos puede servir */


