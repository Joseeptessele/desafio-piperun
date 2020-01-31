var produtos = [
];


function atualizaTabela(nome_do_produto, quantidade) {
 
    const tableBody = document.getElementById("table-body");

    let tableRow = document.createElement('tr');
  
    let elementoQuantidade = document.createElement('td');
    let elementoNome = document.createElement('td');
    elementoNome.classList.add('elementoNome');
    elementoQuantidade.classList.add('elementoQuantidade');
  
    elementoQuantidade.innerHTML = quantidade;
    elementoNome.innerHTML = nome_do_produto;
  
    tableRow.appendChild(elementoQuantidade);
    tableRow.appendChild(elementoNome);
  
    tableBody.appendChild(tableRow);
}


function ehProdutoDuplicado(nomeNovoItem){
  for (var i=0; i < produtos.length; i++) {
    if(produtos[i].nome == nomeNovoItem){
      return true;
    }
  }
  return false;
}

function adicionaItem() {
  var quantidade = document.getElementById("quantidade").value;
  var nome_do_produto = document.getElementById("nome").value;

  if(!ehProdutoDuplicado(nome_do_produto)){
    produtos = [
      ...produtos,
      { 
        nome: nome_do_produto,
        quantidade: quantidade
      }
    ];
    atualizaTabela(nome_do_produto, quantidade);
  }else {
    alert(`${nome_do_produto.toUpperCase()} ja foi adicionado na tabela. Insira um novo item.`)
  }
}

