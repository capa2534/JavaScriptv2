
// function crearPersona(nombre, apellido){
//     return{
//         nombre,
//         apellido    }
// }

const crearPersona = (nombre, apellido) => 
    ({nombre, apellido});


const persona = crearPersona('Andres','Bolaños');
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) =>{
//   console.log({edad, args});
    return args;
}

const [casado, vivo, saludo, nombre] = imprimeArgumentos2(12, true, false, 'Hi', 'Andres');
console.log({casado, vivo, saludo, nombre});

const {apellido: nuevoApellido} = crearPersona('Andres', 'Villalobos');

console.log({nuevoApellido});


const tony = {

    nombre: 'Tony',
    codeName: 'IronMan', 
    vivo: false,
    //edad: 40,
    trajes:['Mark I', 'Mark V', 'hulkbuster'],
}; 

// const imprimePropiedades = ( personaje ) =>{
//     console.log('nombre', personaje.nombre);
//     console.log('codeNmae', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }

const imprimePropiedades = ( {nombre, codeNmae, vivo, edad = 15, trajes} ) =>{
    

    console.log({nombre});
    console.log({codeNmae});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}


imprimePropiedades( tony );