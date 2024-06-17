const selects = document.querySelectorAll('select');
const btnIngresar = document.getElementById('btnVerificar');
const mensaje = document.getElementById('mensaje');


for (let i = 0; i <= 9; i++) {
  selects.forEach(select => {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    select.add(option);
  });
}

btnIngresar.addEventListener('click', () => {
  const password = Array.from(selects).map(select => select.value).join('');

  if (password === '911') {
    mensaje.textContent = "Password 1 correcto";
    mensaje.style.color = 'green';
  } else if (password === '714') {
    mensaje.textContent = "Password 2 correcto";
    mensaje.style.color = 'green';
  } else {
    mensaje.textContent = "Password incorrecto";
    mensaje.style.color = 'red';
  }
});
