const dolarInput = document.getElementById('valor-dolar');
const quantidadeInput = document.getElementById('quantidade');
const totalInput = document.getElementById('total');
const btn = document.getElementById('trocar');

function calcular() {
  const dolar = dolarInput.value;
  const quantidade = quantidadeInput.value;

  const res = dolar * quantidade;

  totalInput.value = res;;
}

btn.addEventListener('click', calcular);
