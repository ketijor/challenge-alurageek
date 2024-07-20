import { conectaApi } from "./scriptApi.js";

async function excluirProduto(id) {
  if (confirm('Tem certeza que deseja excluir este produto?')) {
    try {
      await conectaApi.excluiProduto(id);
    } catch {
      alert('Não foi possível excluir o produto.');
    }
  }
}

export { excluirProduto };
