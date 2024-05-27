const nomeInput = document.getElementById('nome');
const nota1Input = document.getElementById('nota-a');
const nota2Input = document.getElementById('nota-b');
const nota3Input = document.getElementById('nota-c');
const btn = document.getElementById('trocar');
const resultado = document.getElementById('resultado-total');

function calcular() {
  const nome = nomeInput.value;

  const nota1 = +nota1Input.value;
  const nota2 = +nota1Input.value;
  const nota3 = +nota1Input.value;

  const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  console.log(media);

  if (media >= 7) {
    return resultado.textContent = `${nome} sua média é ${media}. Parabéns, você está APROVADO!`;
  } else if (media <= 5) {
    return resultado.textContent = `${nome} sua média é ${media}. Você está REPROVADO.`;
  } else {
    return resultado.textContent = `${nome} sua média é ${media}. Você está de RECUPERAÇÃO.`;  
  }
}

btn.addEventListener('click', calcular);
