const dia = 0; // 0:domingo... 1:Lunes
const horaActual = 10;

let horaApertura;
let mensaje// esta abierto, esta cerrado, hoy abrimos a las XX

if(dia === 0 || dia === 6 ){
    console.log('Fin de semana');
    horaApertura = 9;
}else {
    console.log('Dia de semana');
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = 'Esta abierto';
}


console.log({horaApertura});


