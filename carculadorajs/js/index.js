import {calcular, actualizar, borrar} from './utils.js'

const calculadora = (button,display) => {

    switch(button.innerHTML){
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display,button);
            break;    

    }
}
window.addEventListener('load', ()=>{
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonArray = Array.from(keypadButtons);

    keypadButtonArray.forEach(button =>{
        button.addEventListener('click', ()=>{
            calculadora(button,display);
        })
    })
})




