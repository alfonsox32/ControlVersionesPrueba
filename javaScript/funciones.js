'use strict'

/*function saludos() {
    return 'hola soy messi';
}
console.log(saludos(),saludos());

function calculadora (numero1,numero2) {
    console.log('suma : '+(numero1+numero2));
}
calculadora(3,6)

var edade = parseInt(prompt('Cual es tu edad :',0))

function mayorOnel () {
    if (edade >= 18) {
        console.log('es mayor ;)');
    }
}
console.log(mayorOnel()); */
 
//////////////FUNCIONES CON REST EL RESTO en el tercer parametro
function listadoAnimales(aimal1,animal2, ...resto) {
    console.log('animal 1: '+aimal1);
    console.log('animal 2: '+animal2);
    console.log('el resto: '+resto);
}
listadoAnimales('vaca','toro','elefante','abeja','rana','piojo')

//SPREAD EN FUNCIONES
var animales = ['gato','perro']
listadoAnimales( ...animales,'sapos','gatas','piojetos')