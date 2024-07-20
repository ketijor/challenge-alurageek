import { conectaApi } from "./scriptApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarProduto(evento) {
  evento.preventDefault();

  const nome = document.querySelector('[data-nome]').value;
  const preco = document.querySelector('[data-preco]').value;
  const imagem = document.querySelector('[data-imagem]').value;

  try {
    await conectaApi.criaProduto(nome, preco, imagem);
  } catch {
    alert('Não foi possível adicionar o produto.');
  }

  window.location.reload(true);
}
formulario.addEventListener('submit', evento => criarProduto(evento));