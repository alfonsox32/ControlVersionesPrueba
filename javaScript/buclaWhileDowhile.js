'use strict'

var year = 2025;

while (year <= 2050) {
    console.log('Estamos en el ano; '+year);
    year++;
}

while (year != 1991) {
    console.log('estamos en el ano; '+year);
    year--;
    if (year == 2000) {
        break;
    }
}


var years = 20;

do {
    console.log('Mientras sea menor a 25; ');
    years++;
} while (years < 25);