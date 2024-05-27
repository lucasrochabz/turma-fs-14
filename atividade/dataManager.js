let pessoas = [];

export function getPessoas() {
  return pessoas;
}

export function setPessoas() {
  pessoas = newPessoas;
}

export function addPessoa(pessoa) {
  pessoas.push(pessoa);
}

export function updatePessoa(index, novosDados) {
  pessoas[index] = novosDados;
}

export function removePessoa(index) {
  pessoas.splice(index, 1);
}
