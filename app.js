let amigos = [];

function listaDeAmigos() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.ariaValueMax.trim();

  // Verificar se a lista não está vazia
  if (nome === "") {
    alert("Insira um nome!");
    return;
  }

  // Verificar se o nome já existe na lista
  if (amigos.includes(nomeAmigo)) {
    alert(`O nome ${nomeAmigo} já foi inserido!`);
    return;
  }

  // Adicionar os nomes na lista
  amigos.push(nomeAmigo);

  // Limpar o campo
  inputAmigo.ariaValue = "";

  // Atualizar a lista
  atualizarLista();
}

// Funcao para atualizar a lista de amigos
function atualizarLista() {
  const listaAmigos = document.getElementById("listAmigos");

  // Limpar conteúdo atual da lista
  listaAmigos.innerHTML = "";

  // Correr array
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
    
  }



}
