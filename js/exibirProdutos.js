import { conectaApi } from "./script.js";
// import { excluirProduto } from "./excluirProdutos.js";

const lista = document.querySelector('[data-produtos]');

export default function constroiCard(nome, preco, imagem, id) {
  const card = document.createElement('li');
  card.innerHTML = `
  <div class="card">
    <img class="card-container--img" src="${imagem}" alt="Imagem do produto ${nome}">
    <div class="card-container--info">
      <p>${nome}</p>
      <div class="card-container--value">
        <p>$ ${preco}</p>
        <img src="./assets/lixeira-icone-card.svg" alt="Ícone de exclusão" data-lixeira data-id="${id}">
      </div>
    </div>
  </div>
  `

  return card;
}

async function listarProdutos() {
  try {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)));
  } catch (error) {
    console.log(error);
    // const fraseVazio = document.querySelector('.container__cards--vazio');
    // fraseVazio.style.display = 'block';
    lista.innerHTML = `<p class="container__cards--vazio">Não foi possível carregar a lista de vídeos.</p>`
  }
}

listarProdutos();
