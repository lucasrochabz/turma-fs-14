const tipoSelect = document.getElementById('tipo');
const consumoInput = document.getElementById('consumo');
const resultado = document.getElementById('resultado');
const btn = document.getElementById('trocar');

function calcular() {
  const tipo = +tipoSelect.value;
  const consumo = +consumoInput.value;
  let custo = 0;

  switch (tipo) {
    case 0.60:
    case 0.48:
    case 1.29:
      custo = consumo * tipo;
      break;
  }

  resultado.textContent = `Valor total R$ ${custo.toFixed(2)}`;
}

btn.addEventListener('click', calcular);
