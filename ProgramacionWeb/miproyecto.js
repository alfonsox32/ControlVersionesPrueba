const cajas = document.querySelectorAll('.caja3');

cajas.forEach(caja => {
  let randomY = Math.floor(Math.random() * 500); // entre 0 y 500px
  caja.style.setProperty('--randomY', randomY + 'px');
});

const cajas2 = document.querySelectorAll('.caja3');

cajas2.forEach(caja2 => {
  let random = Math.floor(Math.random() * 500); // entre 0 y 500px
  caja2.style.setProperty('--random', random + 'px');
});