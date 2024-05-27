const compraTotalInput = document.getElementById('compra-total');
const prestacoes = document.getElementById('prestacoes');
const btn = document.getElementById('trocar');

function calcular() {
  const total = compraTotalInput.value;

  const res = total / 5;

  const imprimir = `1ª Parcela ${res}, 2ª Parcela ${res}, 3ª Parcela ${res}, 4ª Parcela ${res}, 5ª Parcela ${res}`

  prestacoes.textContent = imprimir;
}

btn.addEventListener('click', calcular);
