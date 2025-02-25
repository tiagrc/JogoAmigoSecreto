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
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  // Verificar se há amigos disponíveis
  if (amigos.length === 0) {
    alert("Sem amigos disponíveis para sortear! Adicione pelo menos um.");
    return;
  }

  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obetendo amigo sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar o resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}<strong>`;
}
