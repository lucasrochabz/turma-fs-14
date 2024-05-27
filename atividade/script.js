const cepInput = document.getElementById('cep');
const nomeInput = document.getElementById('nome');
const logradouroInput = document.getElementById('logradouro');
const numeroInput = document.getElementById('numero');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');

const btnSalvar = document.getElementById('salvar');
const btnListar = document.getElementById('listar');
const btnExcluir = document.getElementById('excluir');
const btnAtualizar = document.getElementById('atualizar');

async function buscarCep() {
  const cep = cepInput.value;

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = await response.json();
  console.log(data);

  logradouroInput.value = data.logradouro;
  bairroInput.value = data.bairro
  cidadeInput.value = data.localidade;
}

cepInput.addEventListener('change', buscarCep);

let pessoas = [];

function salvarDados() {
  const nome = nomeInput.value;
  const cep = cepInput.value;
  const logradouro = logradouroInput.value;
  const numero = numeroInput.value;
  const bairro = bairroInput.value;
  const cidade = cidadeInput.value;

  const dados = {
    [nome]: {cep, logradouro, numero, bairro, cidade}
  };

  pessoas.push(dados);
  console.log(pessoas);
}

btnSalvar.addEventListener('click', salvarDados);

function listarDados() {
  const display = document.getElementById('lista');
  
  display.innerHTML = ''; // Limpa o conteúdo anterior

  pessoas.forEach(pessoa => {
    const nome = Object.keys(pessoa)[0];
    const dados = pessoa[nome];

    const item = document.createElement('p');
    item.textContent = `Nome: ${nome}, CEP: ${dados.cep}, Logradouro: ${dados.logradouro}, Número: ${dados.numero}, Bairro: ${dados.bairro}, Cidade: ${dados.cidade}.`;
    display.appendChild(item);
  });
}

btnListar.addEventListener('click', listarDados);

const nomeBuscaInput = document.getElementById('nomeBusca');
const nomeUpdateInput = document.getElementById('nomeUpdate');
const cepUpdateInput = document.getElementById('cepUpdate');
const logradouroUpdateInput = document.getElementById('logradouroUpdate');
const numeroUpdateInput = document.getElementById('numeroUpdate');
const bairroUpdateInput = document.getElementById('bairroUpdate');
const cidadeUpdateInput = document.getElementById('cidadeUpdate');

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
  return pessoas.find(pessoa => Object.keys(pessoa)[0] === nome);
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

function atualizarDados() {
  const nomeBusca = nomeBuscaInput.value;
  const pessoa = buscarPessoaPorNome(nomeBusca);

  if (!pessoa) {
    alert('Pessoa não encontrada');
    return;
  }

  const nomeAntigo = Object.keys(pessoa)[0];
  const index = pessoas.findIndex(p => Object.keys(p)[0] === nomeAntigo);
  
  const nome = nomeUpdateInput.value;
  const cep = cepUpdateInput.value;
  const logradouro = logradouroUpdateInput.value;
  const numero = numeroUpdateInput.value;
  const bairro = bairroUpdateInput.value;
  const cidade = cidadeUpdateInput.value;
  
  const novosDados = {
    [nome]: {
      cep,
      logradouro,
      numero,
      bairro,
      cidade
    }
  };

  pessoas[index] = novosDados;
  console.log(pessoas);
}

btnAtualizar.addEventListener('click', atualizarDados);

nomeBuscaInput.addEventListener('input', () => {
  const nome = nomeBuscaInput.value;
  const pessoa = buscarPessoaPorNome(nome);
  
  if (pessoa) {
    preencherCamposParaAtualizar(pessoa);
  } else {
    // Limpa os campos se a pessoa não for encontrada
    nomeUpdateInput.value = '';
    cepUpdateInput.value = '';
    logradouroUpdateInput.value = '';
    numeroUpdateInput.value = '';
    bairroUpdateInput.value = '';
    cidadeUpdateInput.value = '';
  }
});

function excluirDados() {
  // pessoas.shift();
  // pessoas.splice(indice, 1);
  pessoas.pop();
  console.log(pessoas);
}

btnExcluir.addEventListener('click', excluirDados);
