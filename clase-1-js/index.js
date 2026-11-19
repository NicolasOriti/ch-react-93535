let count = 0;

const root = document.getElementById('root');
const display = document.getElementById('display');
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');

btnIncrement.addEventListener('click', () => {
  count++;

  display.textContent = `Contador = ${count}`;
});

btnDecrement.addEventListener('click', () => {
  count--;

  display.textContent = `Contador = ${count}`;
});
