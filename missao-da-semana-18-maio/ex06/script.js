const nomeAlunoInput = document.getElementById('nome');
const primeiraNotaInput = document.getElementById('primeira');
const segundaNotaInput = document.getElementById('segunda');
const terceiraNotaInput = document.getElementById('terceira');
const btnCalcular = document.getElementById('btnCalcular');
const resposta = document.getElementById('resposta');


function calcularMedia() {
  const nomeAluno = nomeAlunoInput.value;
  const nota1 = +primeiraNotaInput.value;
  const nota2 = +segundaNotaInput.value;
  const nota3 = +terceiraNotaInput.value;

  if (nomeAluno === '') {
    return resposta.innerText = 'Insira o nome do Aluno'
  }

  if (nota1 > 10 || nota1 < 0) {
    return resposta.innerText = 'Dados da Primeira Prova inválido'
  } else if (nota2 > 10 || nota2 < 0) {
    return resposta.innerText = 'Dados da Segunda Prova inválido'
  } else if (nota3 > 10 || nota3 < 0) {
    return resposta.innerText = 'Dados da Terceira Prova inválido'
  } else {
    const res = (nota1 + nota2 + nota3) / 3
    return resposta.innerText = `A média de ${nomeAluno} é ${res.toFixed(2)}`
  }
}

btnCalcular.addEventListener('click', calcularMedia);
