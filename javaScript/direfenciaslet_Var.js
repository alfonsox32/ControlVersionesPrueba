'use strict'
var algunnumero = 12 ;
//la condicion no se cumple ya que si es ilgual el resultado pero estrictamente el tipo de dato no es igual con dos == si pasa pero con === no pasa por que es estricto
if (algunnumero === '12') {
    console.log('pasa');
}
//aqui pasa lo mismo si es diferente solo por el tipo de dato si solo poines un = se no cumple la condicion ya que no es estricto pero siu pones == si se cumple por que si son diferentes en el tipo de dato 
if (algunnumero !== '12') {
    console.log('paso el otro');
    
}
//diferencia entre let y var
var numeeeros=45;
console.log(numeeeros);

if (true) {
    //aunque se modifique dentro del if la variable es global se cambia pa todos como por ejemplo si mando a llamar la variable despues del if va seguir siendo 560 siempre y cuiando la condicion se cumpla
    var numeeeros= 560;
    console.log(numeeeros);
}
    console.log(numeeeros);

// let
var texxxtero = 'alfonso pedros';
console.log(texxxtero);
if (true) {
    //acambio de let define la variable nivel de bloque aqui solo vale detro del bloque fuera toma su valor original
    let texxxtero = 'Gonzales pedres'
    console.log(texxxtero);
}
 console.log(texxxtero);
 