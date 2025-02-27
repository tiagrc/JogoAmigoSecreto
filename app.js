let amigos = [];
// alert("Bem vindo ao jogo do amigo-secreto");

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const amigoAdd = inputAmigo.value;

  // Verificar se a lista está vazia
  if (amigoAdd === "") {
    alert("Insira um nome!");
    return;
  }

  // Verificar se o nome já existe na lista
  if (amigos.includes(amigoAdd)) {
    alert(`O nome ${amigoAdd} já foi inserido!`);
    return;
  }

  // Adicionar os nomes na lista
  amigos.push(amigoAdd);

  // Limpar o campo
  inputAmigo.value = "";

  // Atualizar a lista
  atualizarLista();
}

// Funcao para atualizar a lista de amigos
function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");

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
  if (amigos.length <= 2) {
    alert("Sem amigos disponíveis para sortear! Adicione pelo menos 3 nomes!");
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
