const inputs = document.querySelectorAll('input[type="number"]');
const mensaje = document.getElementById('mensaje');
const btnSeleccionar = document.getElementById('btnVerificar');

btnVerificar.addEventListener('click', calcularTotal);


function calcularTotal() {
  const total = Array.from(inputs).reduce((sum, input) => sum + parseInt(input.value), 0);

  if (total <= 10) {
    mensaje.textContent = `Llevas ${total} stickers`;
    mensaje.style.color = 'green';
  } else {
    mensaje.textContent = "Llevas demasiados stickers";
    mensaje.style.color = 'red';
  }
}


