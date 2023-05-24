// centralizar logica de un proceso que se ocupa realizar varias veces

function saludar( nombre ){
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2,3,4,5];  
    // nunca se ejecuta despues del return en este caso
    console.log('Soy un codigo after del return.');

}


// funcion anonima
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

// funcion flecha
const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) =>{
    console.log('Hola ' +nombre);
}

const retornoDeSaludar = saludar('Andres', 40, true,'Costa Rica'); // 1


// saludar2('Bola');
// saludarFlecha();
// saludarFlecha2('juan');


function sumar(a, b){
    return a + b;
}

// const sumar2 = (a,b) =>{
//     return a+b;
// }


// console.log(sumar(1,2));

const sumar2 = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random;

console.log( getAleatorio());