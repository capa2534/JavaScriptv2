let juegos = ['Zelda', 'metroid','ow', 'fallout'];

console.log('Largo:', juegos.length );

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];


console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr });
});

let nuevaLong = juegos.push( 'F-zero' );
console.log({ nuevaLong, juegos});

nuevaLong = juegos.unshift('naruto shii');
console.log({ nuevaLong, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});



let pos = 1;

console.log(juegos);
let juegosBorrados= juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});


// saber posicion de un juego

let falloutIndex = juegos.indexOf('fallout');
console.log({falloutIndex});

