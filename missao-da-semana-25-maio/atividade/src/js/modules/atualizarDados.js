import { getPessoas, updatePessoa } from "../../../dataManager.js";

export default function initAtualizarDados() {
  const nomeBuscaInput = document.getElementById('nomeBusca');
  const nomeUpdateInput = document.getElementById('nomeUpdate');
  const cepUpdateInput = document.getElementById('cepUpdate');
  const logradouroUpdateInput = document.getElementById('logradouroUpdate');
  const numeroUpdateInput = document.getElementById('numeroUpdate');
  const bairroUpdateInput = document.getElementById('bairroUpdate');
  const cidadeUpdateInput = document.getElementById('cidadeUpdate');

  const btnAtualizar = document.getElementById('atualizar');

  async function updateCep() {
    const cepUpdate = cepUpdateInput.value

    const response = await fetch(`https://viacep.com.br/ws/${cepUpdate}/json/`)
    const data = await response.json();
    console.log(data);

    logradouroUpdateInput.value = data.logradouro;
    bairroUpdateInput.value = data.bairro
    cidadeUpdateInput.value = data.localidade;
  }

  cepUpdateInput.addEventListener('change', updateCep);

  function buscarPessoaPorNome(nome) {
    return getPessoas().find(pessoa => Object.keys(pessoa)[0] === nome);
  }

  function preencherCamposParaAtualizar(pessoa) {
    const nome = Object.keys(pessoa)[0];
    const dados = pessoa[nome];
    nomeUpdateInput.value = nome;
    cepUpdateInput.value = dados.cep;
    logradouroUpdateInput.value = dados.logradouro;
    numeroUpdateInput.value = dados.numero;
    bairroUpdateInput.value = dados.bairro;
    cidadeUpdateInput.value = dados.cidade;
  }

  function limparCampos() {
    nomeUpdateInput.value = '';
    cepUpdateInput.value = '';
    logradouroUpdateInput.value = '';
    numeroUpdateInput.value = '';
    bairroUpdateInput.value = '';
    cidadeUpdateInput.value = '';
  }

  function atualizarDados() {
    const nomeBusca = nomeBuscaInput.value;
    const pessoa = buscarPessoaPorNome(nomeBusca);

    if (!pessoa) {
      alert('Pessoa não encontrada');
      return;
    }

    const nomeAntigo = Object.keys(pessoa)[0];
    const index = getPessoas().findIndex(p => Object.keys(p)[0] === nomeAntigo);
    
    const nome = nomeUpdateInput.value;
    const cep = cepUpdateInput.value;
    const logradouro = logradouroUpdateInput.value;
    const numero = numeroUpdateInput.value;
    const bairro = bairroUpdateInput.value;
    const cidade = cidadeUpdateInput.value;
    
    const novosDados = {
      [nome]: { cep, logradouro, numero, bairro, cidade }
    };

    updatePessoa(index, novosDados);
    console.log(getPessoas());
  }

  btnAtualizar.addEventListener('click', atualizarDados);

  nomeBuscaInput.addEventListener('input', () => {
    const nome = nomeBuscaInput.value;
    const pessoa = buscarPessoaPorNome(nome);
    
    if (pessoa) {
      preencherCamposParaAtualizar(pessoa);
    } else {
      limparCampos();
    }
  });
}
