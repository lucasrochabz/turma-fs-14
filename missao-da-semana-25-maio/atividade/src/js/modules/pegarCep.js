export default function initPegarCep() {
  const cepInput = document.getElementById('cep');
  const logradouroInput = document.getElementById('logradouro');
  const bairroInput = document.getElementById('bairro');
  const cidadeInput = document.getElementById('cidade');

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
}
