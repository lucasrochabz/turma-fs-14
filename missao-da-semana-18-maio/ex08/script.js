const celsiusInput = document.getElementById('celsius');
const resultadoInput = document.getElementById('resultado-fahrenheit');
const btn = document.getElementById('trocar');


function converter() {
  const grauCelsius = celsiusInput.value;

  res = (9 * grauCelsius + 160) / 5

  resultadoInput.value = res;
}

btn.addEventListener('click', converter);