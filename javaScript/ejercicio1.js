'use strict'
/*
var numero1 = parseInt(prompt('Primer numero:',0));
var numero2 = parseInt(prompt('El Segundo numero;',0))

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt('Primer numero:',0));
    var numero2 = parseInt(prompt('El Segundo numero;',0))
}

if (numero1 > numero2) {
    console.log('EL NUMERO MAYOR ES: '+numero1);
    console.log('Elnumero menor es: '+numero2);
    
    }else if (numero1 < numero2){
     console.log('EL NUMERO MAYOR ES: '+numero2);
     console.log('Elnumero menor es: '+numero1);
    }else if(numero1 == numero2){
console.log('El numero es igual: '+ numero1 +' '+ numero2);

    } */

///////

do {
    var numero1 = parseInt(prompt('Imgresa numero 1 ',0))
    var numero2 = parseInt(prompt("Elnumero 2 es ",0))
} while (isNaN(numero1) || isNaN(numero2));

document.write('<h1> de numero '+ numero1 +' a ' +numero2 +'  </h1>')

if (numero1 < numero2) {
    for(var i = numero1; i <= numero2; i++){
        document.write('<br>'+i)
    }
}else if(numero1 > numero2){
    for(var i = numero1; i >= numero2; i--){
        document.write('<br>'+i)
    }
}else{
        document.write('<br>'+numero1)
}