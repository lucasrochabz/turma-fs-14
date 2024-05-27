import { getPessoas, removePessoa } from "../../../dataManager.js";

export default function initExcluirDados() {
  const btnExcluir = document.getElementById('excluir');

  function excluirDados() {
    const pessoas = getPessoas();

    if(pessoas.length === 0) {
      console.log('Nenhuma pessoa para excluir');
      return;
    }
    removePessoa(pessoas.length - 1);
    console.log(getPessoas());
  }
  
  btnExcluir.addEventListener('click', excluirDados);
}

// Outros métodos:
// pessoas.shift();
// pessoas.splice(indice, 1);
