async function listaProdutos() {
  const conexao = await fetch('https://66a01a5cb132e2c136000688.mockapi.io/alurageek/produtos');
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
  const conexao = await fetch('https://66a01a5cb132e2c136000688.mockapi.io/alurageek/produtos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      preco: preco,
      imagem: imagem
    })
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function excluiProduto(id) {
  const conexao = await fetch(`https://66a01a5cb132e2c136000688.mockapi.io/alurageek/produtos/${id}`, {
    method: 'DELETE',
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

export const conectaApi = {
  listaProdutos,
  criaProduto,
  excluiProduto
}