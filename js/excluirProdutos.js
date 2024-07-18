import { conectaApi } from "./scriptApi.js";

async function excluirProduto(id) {
  await conectaApi.excluiProduto(id);

  window.location.reload(true);
}

export { excluirProduto };


// const lixeira = document.querySelector('[data-lixeira]');
// lixeira.addEventListener('click', evento => excluirProduto(evento));