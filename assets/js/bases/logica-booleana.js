

const regresarTrue =() =>{
    console.log('Regresa true');
    return true;
}


const regresarFalse =() =>{
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!regresarFalse());


console.warn('And');
console.log(true && true);
console.log(true && !false);

console.log('=======');
console.log(regresarFalse() && regresarTrue());
console.log(regresarTrue && regresarFalse());

console.log('==== && ====');

console.log('4 condiciones', true && true && true && false);
regresarFalse() && regresarTrue();


console.warn('OR');


console.log(true || false);
console.log(false || true);

console.log(regresarTrue() || regresarFalse());

console.log('4 condiciones', true || true || true || false);

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull      = null;
const soyFalso     = false;

const a1 = true && 'Hola world';
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo'
const a5 = soyFalso || soyUndefined || regresarTrue() || 'Ya no soy falso de nuevo'

console.log({a1, a2, a3, a4, a5 });

