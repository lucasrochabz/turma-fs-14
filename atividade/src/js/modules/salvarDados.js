import { getPessoas, addPessoa } from "../../../dataManager.js";

export default function initSalvarDados() {
  const nomeInput = document.getElementById('nome');
  const cepInput = document.getElementById('cep');
  const logradouroInput = document.getElementById('logradouro');
  const numeroInput = document.getElementById('numero');
  const bairroInput = document.getElementById('bairro');
  const cidadeInput = document.getElementById('cidade');

  const btnSalvar = document.getElementById('salvar');

  let pessoas = [];

  function salvarDados() {
    const nome = nomeInput.value;
    const cep = cepInput.value;
    const logradouro = logradouroInput.value;
    const numero = numeroInput.value;
    const bairro = bairroInput.value;
    const cidade = cidadeInput.value;
  
    const novaPessoa = {
      [nome]: {cep, logradouro, numero, bairro, cidade}
    };

    addPessoa(novaPessoa);
    console.log(getPessoas())
  }
  
  btnSalvar.addEventListener('click', salvarDados);
}
