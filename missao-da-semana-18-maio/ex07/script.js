const variavelAInput = document.getElementById('variavel-a');
const variavelBInput = document.getElementById('variavel-b');
const respostaA = document.getElementById('resultado-a')
const respostaB = document.getElementById('resultado-b')

const btnTrocar = document.getElementById('trocar');

function trocarValores() {
  const valorA = variavelAInput.value;
  const valorB = variavelBInput.value;

  respostaA.innerText = `Valor original de A:${valorA} - Novo valor: ${valorB}`
  respostaB.innerText = `Valor original de B:${valorB} - Novo valor: ${valorA}`
}

btnTrocar.addEventListener('click', trocarValores);
