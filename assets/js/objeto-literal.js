// objeto literal son como diccionarios
// llaves son objeto "literal" pares de valores
const personaje = {

    nombre: 'Tony',
    codeName: 'IronMan', 
    vivo: false,
    edad: 40,
    coords: {
        lat: 43.534,
        lng: -128.32
    },
    trajes:['Mark I', 'Mark V', 'hulkbuster'],
    direccion:{
        zip: '30302, 30291',
        ubicacion: "Malibu, California"
    },
    'ultima-pelicula': 'Infinity war'
}; 

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje ['nombre']);

console.log('Edad', personaje.edad);
console.log('Coords',personaje.coords.lat);

console.log('Cantidad de trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[ personaje.trajes.length - 1]);



const x = 'vivo';
console.log('Vivo', personaje[x] );
console.log('Ultima pelicula',personaje['ultima-pelicula'] );

// mas detalles 


delete personaje.edad;

console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);


personaje.dinero =12312132;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);

const values = Object.values(personaje);
console.log({propiedades, values});