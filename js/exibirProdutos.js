import { conectaApi } from "./scriptApi.js";
import { excluirProduto } from "./excluirProdutos.js";

const lista = document.querySelector('[data-produtos]');

function constroiCard(nome, preco, imagem, id) {
  const card = document.createElement('li');
  card.innerHTML = `
  <div class="card">
    <img class="card-container--img" src="${imagem}" alt="Imagem do produto ${nome}">
    <div class="card-container--info">
      <p>${nome}</p>
      <div class="card-container--value">
        <p>$ ${preco}</p>
        <img src="./assets/lixeira-icone-card.svg" alt="Ícone de exclusão" data-lixeira id=${id}>
      </div>
    </div>
  </div>
  `

  return card;
}

async function listarProdutos() {
  try {
    const listaApi = await conectaApi.listaProdutos();

    if (listaApi.length) {
      listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)));
    } else {
      lista.innerHTML = `<p class="container__cards--vazio">Nenhum produto foi adicionado.</p>`
    }

    const lixeira = document.querySelectorAll('[data-lixeira]');
    lixeira.forEach(bt => {
      bt.addEventListener('click', () => excluirProduto(bt.id));
    })
  } catch {
    lista.innerHTML = `<p class="container__cards--vazio">Não foi possível carregar a lista de produtos.</p>`
  }
}

listarProdutos();
