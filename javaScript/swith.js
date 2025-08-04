'use strict'
/*
swith controla que casos va a pasar
*/
var numeroTelefono='873432a442'
switch (numeroTelefono) {

    case '8730001212':
        console.log('Acertaste el numero');
        break;

    case '873432442' :
    console.log('Estas mal compare');
    break;

    default:
        console.log('no FUE NI UNO NI OTRO');
        break;
}

var edad45=18;
var imprime='';
switch (edad45) {
    case 18:
        imprime='Acabas de cumplir 18'
        break;
    case 17 :
        imprime='Aun no eres mayor te falta 1 ano'
    break;
    case 13:
        imprime='No mi chabo esta muy chico'
        break;
    default:
      
        break;
}
  console.log(imprime);