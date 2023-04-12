export const calcular = display => display.innerHTML = eval(display.innerHTML);

export const actualizar = (display, button)=>{
   
    if(display.innerHTML == 0) display.innerHTML = ''
    
    display.innerHTML+= button.innerHTML
};

export const borrar = display => display.innerHTML = 0;
/*
export {
    calcular,
    actualizar,
    borrar,

}*/

