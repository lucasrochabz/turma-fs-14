const mesInput = document.getElementById('mes');
const resultadoInput = document.getElementById('resultado');
const btn = document.getElementById('trocar');

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function calcular() {
  const index = +mesInput.value;

  if (index >= 1 && index <= meses.length) {
    const mesSelecionado = meses[index - 1];
    resultadoInput.value = mesSelecionado;
  } else {
    resultadoInput.value = 'Mês inválido';
  }
}

btn.addEventListener('click', calcular);
