const eMayor = (a, b) => (a > b) ? a : b

const tieneMembresia = (miembro) => miembro ? '2 $' : '10 $'


console.log(eMayor(20, 15));
console.log(tieneMembresia( false ) );

const amigo = true;
const amigosArr =[
    'peter',
    'tony',
    'dr mundo',
    amigo ? 'thor' : 'loki',
    (()=> 'Nick fury')(),// <-- funcion anonima auto-invocadad -->
    eMayor(10,14)
]

console.log( amigosArr );

const nota = 100;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F';

console.log({nota,grado})