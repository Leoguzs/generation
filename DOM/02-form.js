const nameTitle = document.querySelector('#name')
const input = document.querySelector('#input')

const writeName = () => {
    const inputValue = input.value;   //tiene el valor de lo que ingrsamos
    nameTitle.textContent = inputValue //cambiamos el valor por el que ingresamos
}