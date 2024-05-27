import { getPessoas } from "../../../dataManager.js";

export default function initListarDados() {
  const btnListar = document.getElementById('listar');

  function listarDados() {
    const display = document.getElementById('lista');
    
    display.innerHTML = '';
    const pessoas = getPessoas();
  
    pessoas.forEach(pessoa => {
      const nome = Object.keys(pessoa)[0];
      const dados = pessoa[nome];
  
      const item = document.createElement('p');
      item.textContent = `Nome: ${nome}, CEP: ${dados.cep}, Logradouro: ${dados.logradouro}, Número: ${dados.numero}, Bairro: ${dados.bairro}, Cidade: ${dados.cidade}.`;
      display.appendChild(item);
    });
  }
  
  btnListar.addEventListener('click', listarDados);
}
